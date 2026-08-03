import { parseLeadSubmission, type LeadSubmission } from "../../../lib/lead-intake.ts";
import { deliverLead, LeadDeliveryError } from "../../../lib/lead-delivery.ts";

export const runtime = "nodejs";
export const maxDuration = 55;
export const MAX_LEAD_REQUEST_BYTES = 16_384;

const ALLOWED_PRODUCTION_ORIGINS = new Set([
  "https://paintswitch.com",
  "https://paintswitch-web.vercel.app",
]);
const BODY_READ_TIMEOUT_MS = 5_000;

const responseHeaders = {
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};

function errorResponse(status: number, code: string, extraHeaders?: Record<string, string>) {
  return Response.json(
    { success: false, code },
    { status, headers: { ...responseHeaders, ...extraHeaders } },
  );
}

function hasAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    const parsedOrigin = new URL(origin);
    const requestUrl = new URL(request.url);

    const originIsLocal = parsedOrigin.hostname === "localhost" || parsedOrigin.hostname === "127.0.0.1";
    const requestIsLocal = requestUrl.hostname === "localhost" || requestUrl.hostname === "127.0.0.1";
    if (originIsLocal && requestIsLocal && parsedOrigin.port === requestUrl.port) return true;

    if (parsedOrigin.origin !== requestUrl.origin) return false;
    if (ALLOWED_PRODUCTION_ORIGINS.has(requestUrl.origin)) return true;

    const isVercelPreview = process.env.VERCEL_ENV === "preview" && requestUrl.hostname.endsWith(".vercel.app");
    return isVercelPreview;
  } catch {
    return false;
  }
}

async function readBoundedBody(request: Request) {
  if (!request.body) return { ok: true as const, value: "" };

  const reader = request.body.getReader();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let bytesRead = 0;
  let timedOut = false;
  let value = "";
  const timeout = setTimeout(() => {
    timedOut = true;
    void reader.cancel().catch(() => undefined);
  }, BODY_READ_TIMEOUT_MS);

  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;

      bytesRead += chunk.value.byteLength;
      if (bytesRead > MAX_LEAD_REQUEST_BYTES) {
        await reader.cancel().catch(() => undefined);
        return { ok: false as const, reason: "too-large" as const };
      }

      value += decoder.decode(chunk.value, { stream: true });
    }

    if (timedOut) return { ok: false as const, reason: "invalid" as const };
    value += decoder.decode();
    return { ok: true as const, value };
  } catch {
    await reader.cancel().catch(() => undefined);
    return { ok: false as const, reason: "invalid" as const };
  } finally {
    clearTimeout(timeout);
    reader.releaseLock();
  }
}

export async function POST(request: Request) {
  return handleLeadRequest(request, deliverLead);
}

export async function handleLeadRequest(
  request: Request,
  delivery: (lead: LeadSubmission) => Promise<unknown>,
) {
  if (!hasAllowedOrigin(request)) return errorResponse(403, "REQUEST_REJECTED");

  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  const mediaType = contentType.split(";", 1)[0]?.trim();
  if (mediaType !== "application/json") {
    return errorResponse(415, "UNSUPPORTED_CONTENT_TYPE");
  }

  const contentLength = request.headers.get("content-length");
  if (contentLength !== null) {
    const trimmedLength = contentLength.trim();
    const declaredLength = Number(trimmedLength);
    if (!/^\d+$/u.test(trimmedLength) || !Number.isSafeInteger(declaredLength)) {
      return errorResponse(400, "INVALID_REQUEST");
    }
    if (declaredLength > MAX_LEAD_REQUEST_BYTES) {
      return errorResponse(413, "REQUEST_TOO_LARGE");
    }
  }

  const bodyResult = await readBoundedBody(request);
  if (!bodyResult.ok) {
    return bodyResult.reason === "too-large"
      ? errorResponse(413, "REQUEST_TOO_LARGE")
      : errorResponse(400, "INVALID_REQUEST");
  }

  const rawBody = bodyResult.value;

  let body: unknown;
  try {
    body = JSON.parse(rawBody) as unknown;
  } catch {
    return errorResponse(400, "INVALID_REQUEST");
  }

  const parsed = parseLeadSubmission(body);
  if (!parsed.ok) return errorResponse(400, "INVALID_REQUEST");

  try {
    await delivery(parsed.value);
    return Response.json({ success: true }, { status: 200, headers: responseHeaders });
  } catch (error) {
    if (error instanceof LeadDeliveryError && error.code === "conflict") {
      return errorResponse(409, "SUBMISSION_CONFLICT");
    }
    if (error instanceof LeadDeliveryError && error.code === "busy") {
      return errorResponse(503, "LEAD_DELIVERY_UNAVAILABLE", { "Retry-After": "2" });
    }
    return errorResponse(503, "LEAD_DELIVERY_UNAVAILABLE", { "Retry-After": "60" });
  }
}
