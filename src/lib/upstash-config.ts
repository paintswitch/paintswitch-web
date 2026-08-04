import type { UpstashConfig } from "./upstash-idempotency.ts";

export function loadUpstashConfig(environment: NodeJS.ProcessEnv): UpstashConfig | null {
  const marketplaceUrl = environment.UPSTASH_REDIS_REST_KV_REST_API_URL;
  const marketplaceToken = environment.UPSTASH_REDIS_REST_KV_REST_API_TOKEN;
  const marketplaceConfigured = marketplaceUrl !== undefined || marketplaceToken !== undefined;
  const rawUrl = marketplaceConfigured ? marketplaceUrl : environment.UPSTASH_REDIS_REST_URL;
  const token = marketplaceConfigured ? marketplaceToken : environment.UPSTASH_REDIS_REST_TOKEN;
  if (typeof rawUrl !== "string" || typeof token !== "string" || token.length < 20 || token.length > 2_000) {
    return null;
  }

  try {
    const url = new URL(rawUrl);
    if (
      url.protocol !== "https:" ||
      !url.hostname.endsWith(".upstash.io") ||
      url.username || url.password || url.search || url.hash
    ) {
      return null;
    }
    return { url: url.origin, token };
  } catch {
    return null;
  }
}
