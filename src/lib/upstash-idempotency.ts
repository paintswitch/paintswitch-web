export type LeadDeliveryPhase =
  | "contacting"
  | "contacted"
  | "creating"
  | "ambiguous"
  | "rejected"
  | "completed";

export type LeadDeliveryState = {
  version: 1;
  payloadHash: string;
  phase: LeadDeliveryPhase;
  contactId?: string;
  opportunityId?: string;
  errorCategory?: "provider-rejected" | "provider-ambiguous";
  updatedAt: string;
};

export type UpstashConfig = {
  url: string;
  token: string;
};

export type UpstashDependencies = {
  fetch: typeof fetch;
  now: () => number;
  randomUUID: () => string;
};

export type LeadStateClaim =
  | { status: "acquired"; token: string; state: LeadDeliveryState | null }
  | { status: "busy"; state: LeadDeliveryState | null };

// Keep the lock longer than the route's full bounded provider-call window. The
// token-checked writes still prevent a stale worker from mutating state after a
// newer worker takes over.
const LOCK_SECONDS = 60;
const RESPONSE_LIMIT_BYTES = 64_000;
const REDIS_TIMEOUT_MS = 2_500;
const phases = new Set<LeadDeliveryPhase>([
  "contacting",
  "contacted",
  "creating",
  "ambiguous",
  "rejected",
  "completed",
]);

const writeIfLockedScript = [
  "if redis.call('GET', KEYS[1]) ~= ARGV[1] then",
  "  return 0",
  "end",
  "redis.call('SET', KEYS[2], ARGV[2])",
  "return 1",
].join("\n");

const completeIfLockedScript = [
  "if redis.call('GET', KEYS[1]) ~= ARGV[1] then",
  "  return 0",
  "end",
  "redis.call('SET', KEYS[2], ARGV[2])",
  "redis.call('DEL', KEYS[1])",
  "return 1",
].join("\n");

const releaseIfLockedScript = [
  "if redis.call('GET', KEYS[1]) ~= ARGV[1] then",
  "  return 0",
  "end",
  "return redis.call('DEL', KEYS[1])",
].join("\n");

export class UpstashUnavailableError extends Error {
  constructor() {
    super("Durable lead state is unavailable");
    this.name = "UpstashUnavailableError";
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isState(value: unknown): value is LeadDeliveryState {
  if (!isRecord(value)) return false;
  if (value.version !== 1 || typeof value.phase !== "string" || !phases.has(value.phase as LeadDeliveryPhase)) {
    return false;
  }
  if (typeof value.payloadHash !== "string" || !/^[0-9a-f]{64}$/u.test(value.payloadHash)) return false;
  if (typeof value.updatedAt !== "string" || Number.isNaN(Date.parse(value.updatedAt))) return false;
  if (value.contactId !== undefined && typeof value.contactId !== "string") return false;
  if (value.opportunityId !== undefined && typeof value.opportunityId !== "string") return false;
  if (
    value.errorCategory !== undefined &&
    value.errorCategory !== "provider-rejected" &&
    value.errorCategory !== "provider-ambiguous"
  ) {
    return false;
  }
  return true;
}

function stateKey(submissionId: string) {
  return `ps:lead:v1:${submissionId}`;
}

function lockKey(submissionId: string) {
  return `ps:lead-lock:v1:${submissionId}`;
}

async function readLimitedResponse(response: Response) {
  const declaredLength = response.headers.get("content-length");
  if (declaredLength && Number(declaredLength) > RESPONSE_LIMIT_BYTES) throw new UpstashUnavailableError();

  if (!response.body) throw new UpstashUnavailableError();

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let bytesRead = 0;
  let text = "";

  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;

      bytesRead += chunk.value.byteLength;
      if (bytesRead > RESPONSE_LIMIT_BYTES) {
        await reader.cancel().catch(() => undefined);
        throw new UpstashUnavailableError();
      }
      text += decoder.decode(chunk.value, { stream: true });
    }
    text += decoder.decode();
  } catch (error) {
    if (error instanceof UpstashUnavailableError) throw error;
    throw new UpstashUnavailableError();
  } finally {
    reader.releaseLock();
  }

  try {
    return JSON.parse(text) as unknown;
  } catch {
    throw new UpstashUnavailableError();
  }
}

async function command(
  config: UpstashConfig,
  dependencies: UpstashDependencies,
  parts: Array<string | number>,
) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REDIS_TIMEOUT_MS);

  try {
    const response = await dependencies.fetch(config.url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${config.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parts),
      cache: "no-store",
      signal: controller.signal,
    });

    const body = await readLimitedResponse(response);
    if (!response.ok || !isRecord(body) || Object.hasOwn(body, "error") || !Object.hasOwn(body, "result")) {
      throw new UpstashUnavailableError();
    }
    return body.result;
  } catch (error) {
    if (error instanceof UpstashUnavailableError) throw error;
    throw new UpstashUnavailableError();
  } finally {
    clearTimeout(timeout);
  }
}

export function createLeadStateStore(config: UpstashConfig, dependencies: UpstashDependencies) {
  async function get(submissionId: string) {
    const result = await command(config, dependencies, ["GET", stateKey(submissionId)]);
    if (result === null) return null;
    if (typeof result !== "string") throw new UpstashUnavailableError();

    try {
      const parsed = JSON.parse(result) as unknown;
      if (!isState(parsed)) throw new UpstashUnavailableError();
      return parsed;
    } catch (error) {
      if (error instanceof UpstashUnavailableError) throw error;
      throw new UpstashUnavailableError();
    }
  }

  async function claim(submissionId: string): Promise<LeadStateClaim> {
    const token = dependencies.randomUUID();
    const result = await command(config, dependencies, [
      "SET",
      lockKey(submissionId),
      token,
      "NX",
      "EX",
      LOCK_SECONDS,
    ]);

    if (result !== "OK") return { status: "busy", state: null };
    try {
      return { status: "acquired", token, state: await get(submissionId) };
    } catch (error) {
      await release(submissionId, token);
      throw error;
    }
  }

  async function write(submissionId: string, token: string, state: LeadDeliveryState) {
    const result = await command(config, dependencies, [
      "EVAL",
      writeIfLockedScript,
      2,
      lockKey(submissionId),
      stateKey(submissionId),
      token,
      JSON.stringify(state),
    ]);
    if (result !== 1) throw new UpstashUnavailableError();
  }

  async function complete(submissionId: string, token: string, state: LeadDeliveryState) {
    const result = await command(config, dependencies, [
      "EVAL",
      completeIfLockedScript,
      2,
      lockKey(submissionId),
      stateKey(submissionId),
      token,
      JSON.stringify(state),
    ]);
    if (result !== 1) throw new UpstashUnavailableError();
  }

  async function release(submissionId: string, token: string) {
    try {
      await command(config, dependencies, [
        "EVAL",
        releaseIfLockedScript,
        1,
        lockKey(submissionId),
        token,
      ]);
    } catch {
      // The short lock TTL prevents a failed cleanup call from blocking later retries.
    }
  }

  return { claim, complete, get, release, write };
}
