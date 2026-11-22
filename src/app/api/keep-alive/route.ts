import { timingSafeEqual } from "node:crypto";

import { loadUpstashConfig } from "../../../lib/upstash-config.ts";
import { touchKeepAlive, type UpstashFetchDependencies } from "../../../lib/upstash-idempotency.ts";

// D-079: called once a day by Vercel Cron (see vercel.json). It writes one
// timestamp to the lead-state database so the Free plan never archives it for
// inactivity, which is what took the quote form down before 2026-11-21.

export const runtime = "nodejs";
export const maxDuration = 15;

const responseHeaders = {
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};

function isAuthorized(request: Request, environment: NodeJS.ProcessEnv) {
  const secret = environment.CRON_SECRET;
  // Vercel sends "Authorization: Bearer <CRON_SECRET>" when that variable is
  // set. When it is set, nothing else is accepted.
  if (typeof secret !== "string" || secret.length === 0) return true;

  const expected = Buffer.from(`Bearer ${secret}`, "utf8");
  const received = Buffer.from(request.headers.get("authorization") ?? "", "utf8");
  return expected.length === received.length && timingSafeEqual(expected, received);
}

export async function handleKeepAliveRequest(
  request: Request,
  options: {
    environment?: NodeJS.ProcessEnv;
    dependencies?: UpstashFetchDependencies;
  } = {},
) {
  const environment = options.environment ?? process.env;
  if (!isAuthorized(request, environment)) {
    return Response.json({ ok: false }, { status: 401, headers: responseHeaders });
  }

  const config = loadUpstashConfig(environment);
  if (!config) return Response.json({ ok: false }, { status: 503, headers: responseHeaders });

  try {
    await touchKeepAlive(config, options.dependencies ?? { fetch: globalThis.fetch });
    return Response.json({ ok: true }, { status: 200, headers: responseHeaders });
  } catch {
    return Response.json({ ok: false }, { status: 503, headers: responseHeaders });
  }
}

export async function GET(request: Request) {
  return handleKeepAliveRequest(request);
}
