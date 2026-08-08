import { createHmac } from "node:crypto";
import { isIP } from "node:net";

import { consumeLeadRateLimit, type UpstashFetchDependencies } from "./upstash-idempotency.ts";
import { loadUpstashConfig } from "./upstash-config.ts";

export type LeadRateLimitDecision = {
  allowed: boolean;
  retryAfterSeconds: number;
};

export class LeadRateLimitUnavailableError extends Error {
  constructor() {
    super("Lead rate limiting is unavailable");
    this.name = "LeadRateLimitUnavailableError";
  }
}

const defaultDependencies: UpstashFetchDependencies = { fetch: globalThis.fetch };
const deployedEnvironments = new Set(["preview", "production"]);

function canonicalIp(value: string) {
  if (value.length === 0 || value.length > 64 || value.includes(",") || value !== value.trim()) return null;
  const version = isIP(value);
  if (version === 4) return value;
  if (version !== 6) return null;

  try {
    const hostname = new URL(`http://[${value}]/`).hostname;
    return hostname.slice(1, -1);
  } catch {
    return null;
  }
}

function clientIdentity(request: Request, environment: NodeJS.ProcessEnv) {
  const vercelEnvironment = environment.VERCEL_ENV;
  if (typeof vercelEnvironment === "string" && deployedEnvironments.has(vercelEnvironment)) {
    const forwardedIp = request.headers.get("x-vercel-forwarded-for");
    return forwardedIp ? canonicalIp(forwardedIp) : null;
  }

  try {
    const hostname = new URL(request.url).hostname;
    if (hostname === "localhost" || hostname === "127.0.0.1") return "local-development";
  } catch {
    return null;
  }
  return null;
}

function rateLimitNamespace(environment: NodeJS.ProcessEnv) {
  return environment.VERCEL_ENV === "production"
    ? "production"
    : environment.VERCEL_ENV === "preview"
      ? "preview"
      : "local";
}

export async function enforceLeadRateLimit(
  request: Request,
  options: {
    environment?: NodeJS.ProcessEnv;
    dependencies?: UpstashFetchDependencies;
  } = {},
): Promise<LeadRateLimitDecision> {
  const environment = options.environment ?? process.env;
  const config = loadUpstashConfig(environment);
  const identity = clientIdentity(request, environment);
  if (!config || !identity) throw new LeadRateLimitUnavailableError();

  const namespace = rateLimitNamespace(environment);
  const digest = createHmac("sha256", config.token)
    .update("PaintSwitch lead rate limit\0", "utf8")
    .update(namespace, "utf8")
    .update("\0", "utf8")
    .update(identity, "utf8")
    .digest("hex");

  try {
    return await consumeLeadRateLimit(config, options.dependencies ?? defaultDependencies, namespace, digest);
  } catch {
    throw new LeadRateLimitUnavailableError();
  }
}
