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

export type UpstashFetchDependencies = {
  fetch: typeof fetch;
};

export type UpstashDependencies = UpstashFetchDependencies & {
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
export const LEAD_STATE_TTL_SECONDS = 30 * 24 * 60 * 60;
export const LEAD_RATE_LIMIT_MAX_SUBMISSIONS = 5;
export const LEAD_RATE_LIMIT_WINDOW_SECONDS = 10 * 60;
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
  "redis.call('SET', KEYS[2], ARGV[2], 'EX', ARGV[3])",
  "return 1",
].join("\n");

const completeIfLockedScript = [
  "if redis.call('GET', KEYS[1]) ~= ARGV[1] then",
  "  return 0",
  "end",
  "redis.call('SET', KEYS[2], ARGV[2], 'EX', ARGV[3])",
  "redis.call('DEL', KEYS[1])",
  "return 1",
].join("\n");

const releaseIfLockedScript = [
  "if redis.call('GET', KEYS[1]) ~= ARGV[1] then",
  "  return 0",
  "end",
  "return redis.call('DEL', KEYS[1])",
].join("\n");

const consumeRateLimitScript = [
  "local limit = tonumber(ARGV[1])",
  "local window = tonumber(ARGV[2])",
  "local current = tonumber(redis.call('GET', KEYS[1]) or '0')",
  "if not limit or not window or not current then",
  "  return {0, -1, -1}",
  "end",
  "local ttl = redis.call('PTTL', KEYS[1])",
  "if current >= limit then",
  "  return {0, current, ttl}",
  "end",
  "current = redis.call('INCR', KEYS[1])",
  "if current == 1 then",
  "  redis.call('PEXPIRE', KEYS[1], window)",
  "  ttl = window",
  "else",
  "  ttl = redis.call('PTTL', KEYS[1])",
  "end",
  "return {1, current, ttl}",
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
  dependencies: UpstashFetchDependencies,
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

function rateLimitKey(namespace: string, digest: string) {
  if (!/^(?:local|preview|production)$/u.test(namespace) || !/^[0-9a-f]{64}$/u.test(digest)) {
    throw new UpstashUnavailableError();
  }
  return `ps:lead-rate:v1:${namespace}:${digest}`;
}

export async function consumeLeadRateLimit(
  config: UpstashConfig,
  dependencies: UpstashFetchDependencies,
  namespace: string,
  digest: string,
) {
  const result = await command(config, dependencies, [
    "EVAL",
    consumeRateLimitScript,
    1,
    rateLimitKey(namespace, digest),
    LEAD_RATE_LIMIT_MAX_SUBMISSIONS,
    LEAD_RATE_LIMIT_WINDOW_SECONDS * 1_000,
  ]);

  if (
    !Array.isArray(result) ||
    result.length !== 3 ||
    (result[0] !== 0 && result[0] !== 1) ||
    !Number.isSafeInteger(result[1]) ||
    result[1] < 1 ||
    !Number.isSafeInteger(result[2]) ||
    result[2] < 1 ||
    result[2] > LEAD_RATE_LIMIT_WINDOW_SECONDS * 1_000
  ) {
    throw new UpstashUnavailableError();
  }
  if (
    (result[0] === 1 && result[1] > LEAD_RATE_LIMIT_MAX_SUBMISSIONS) ||
    (result[0] === 0 && result[1] < LEAD_RATE_LIMIT_MAX_SUBMISSIONS)
  ) {
    throw new UpstashUnavailableError();
  }

  return {
    allowed: result[0] === 1,
    retryAfterSeconds: result[0] === 1 ? 0 : Math.max(1, Math.ceil(result[2] / 1_000)),
  };
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
      LEAD_STATE_TTL_SECONDS,
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
      LEAD_STATE_TTL_SECONDS,
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
