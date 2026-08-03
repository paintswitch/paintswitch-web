import { createHash, randomUUID } from "node:crypto";

import { createGhlClient, GhlProviderError, loadGhlConfig } from "./ghl-client.ts";
import type { LeadSubmission } from "./lead-intake.ts";
import {
  createLeadStateStore,
  type LeadDeliveryPhase,
  type LeadDeliveryState,
  type UpstashConfig,
} from "./upstash-idempotency.ts";

export type LeadDeliveryResult = {
  opportunityId: string;
  replayed: boolean;
};

export type LeadDeliveryErrorCode = "busy" | "conflict" | "unavailable";

export type LeadDeliveryDependencies = {
  fetch: typeof fetch;
  now: () => number;
  randomUUID: () => string;
  sleep: (milliseconds: number) => Promise<void>;
  report?: (event: "provider-ambiguous" | "provider-rejected" | "state-unavailable", submissionId: string) => void;
};

const defaultDependencies: LeadDeliveryDependencies = {
  fetch: globalThis.fetch,
  now: Date.now,
  randomUUID,
  sleep: (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds)),
  report: (event, submissionId) => {
    console.error(JSON.stringify({ event: `lead-delivery-${event}`, submissionId }));
  },
};

export class LeadDeliveryError extends Error {
  readonly code: LeadDeliveryErrorCode;

  constructor(code: LeadDeliveryErrorCode) {
    super("Lead delivery failed");
    this.name = "LeadDeliveryError";
    this.code = code;
  }
}

function loadUpstashConfig(environment: NodeJS.ProcessEnv): UpstashConfig | null {
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

function payloadHash(lead: LeadSubmission) {
  return createHash("sha256").update(JSON.stringify(lead), "utf8").digest("hex");
}

function state(
  hash: string,
  phase: LeadDeliveryPhase,
  now: number,
  details: Pick<LeadDeliveryState, "contactId" | "opportunityId" | "errorCategory"> = {},
): LeadDeliveryState {
  return {
    version: 1,
    payloadHash: hash,
    phase,
    ...details,
    updatedAt: new Date(now).toISOString(),
  };
}

function assertMatchingPayload(existing: LeadDeliveryState | null, hash: string) {
  if (existing && existing.payloadHash !== hash) throw new LeadDeliveryError("conflict");
}

function completedResult(existing: LeadDeliveryState | null): LeadDeliveryResult | null {
  if (!existing || existing.phase !== "completed") return null;
  if (!existing.opportunityId) throw new LeadDeliveryError("unavailable");
  return { opportunityId: existing.opportunityId, replayed: true };
}

export async function deliverLead(
  lead: LeadSubmission,
  options: {
    environment?: NodeJS.ProcessEnv;
    dependencies?: LeadDeliveryDependencies;
  } = {},
): Promise<LeadDeliveryResult> {
  const environment = options.environment ?? process.env;
  if (environment.LEAD_DELIVERY_ENABLED !== "true") throw new LeadDeliveryError("unavailable");

  const ghlConfig = loadGhlConfig(environment);
  const upstashConfig = loadUpstashConfig(environment);
  if (!ghlConfig || !upstashConfig) throw new LeadDeliveryError("unavailable");

  const dependencies = options.dependencies ?? defaultDependencies;
  const store = createLeadStateStore(upstashConfig, dependencies);
  const ghl = createGhlClient(ghlConfig, dependencies);
  const hash = payloadHash(lead);

  let claim;
  try {
    claim = await store.claim(lead.submissionId);
  } catch {
    dependencies.report?.("state-unavailable", lead.submissionId);
    throw new LeadDeliveryError("unavailable");
  }

  try {
    assertMatchingPayload(claim.state, hash);
  } catch (error) {
    if (claim.status === "acquired") await store.release(lead.submissionId, claim.token);
    throw error;
  }

  let alreadyCompleted: LeadDeliveryResult | null;
  try {
    alreadyCompleted = completedResult(claim.state);
  } catch (error) {
    if (claim.status === "acquired") await store.release(lead.submissionId, claim.token);
    throw error;
  }
  if (alreadyCompleted) {
    if (claim.status === "acquired") await store.release(lead.submissionId, claim.token);
    return alreadyCompleted;
  }

  if (claim.status === "busy") {
    await dependencies.sleep(200);
    try {
      const current = await store.get(lead.submissionId);
      assertMatchingPayload(current, hash);
      const completed = completedResult(current);
      if (completed) return completed;
    } catch (error) {
      if (error instanceof LeadDeliveryError) throw error;
      throw new LeadDeliveryError("unavailable");
    }
    throw new LeadDeliveryError("busy");
  }

  const lockToken = claim.token;
  let current = claim.state;
  let lockCompleted = false;

  async function finish(contactId: string, opportunityId: string, replayed: boolean) {
    await store.complete(
      lead.submissionId,
      lockToken,
      state(hash, "completed", dependencies.now(), { contactId, opportunityId }),
    );
    lockCompleted = true;
    return { opportunityId, replayed };
  }

  async function reconcile(contactId: string) {
    const opportunityId = await ghl.findOpportunityBySubmission(contactId, lead.submissionId);
    return opportunityId ? finish(contactId, opportunityId, true) : null;
  }

  try {
    let opportunityAlreadyChecked = false;

    if (current && (current.phase === "creating" || current.phase === "ambiguous")) {
      if (current.contactId) {
        const reconciled = await reconcile(current.contactId);
        if (reconciled) return reconciled;
      }
      dependencies.report?.("provider-ambiguous", lead.submissionId);
      throw new LeadDeliveryError("unavailable");
    }

    // An explicit non-retryable provider response is evidence that the create
    // did not succeed. Reconcile first in case the provider behaved
    // unexpectedly, then permit a controlled retry after configuration is
    // corrected. Ambiguous responses never take this path.
    if (current?.phase === "rejected") {
      if (!current.contactId) throw new LeadDeliveryError("unavailable");
      const reconciled = await reconcile(current.contactId);
      if (reconciled) return reconciled;
      opportunityAlreadyChecked = true;
      current = state(hash, "contacted", dependencies.now(), { contactId: current.contactId });
    }

    let contactId = current?.contactId;
    if (!contactId) {
      current = state(hash, "contacting", dependencies.now());
      await store.write(lead.submissionId, lockToken, current);
      contactId = await ghl.upsertContact(lead);
      current = state(hash, "contacted", dependencies.now(), { contactId });
      await store.write(lead.submissionId, lockToken, current);
    }

    if (!opportunityAlreadyChecked) {
      const reconciled = await reconcile(contactId);
      if (reconciled) return reconciled;
    }

    current = state(hash, "creating", dependencies.now(), { contactId });
    await store.write(lead.submissionId, lockToken, current);

    try {
      const opportunityId = await ghl.createOpportunity(lead, contactId);
      return await finish(contactId, opportunityId, false);
    } catch (error) {
      const category = error instanceof GhlProviderError ? error.category : "ambiguous";
      current = state(
        hash,
        category === "rejected" ? "rejected" : "ambiguous",
        dependencies.now(),
        {
          contactId,
          errorCategory: category === "rejected" ? "provider-rejected" : "provider-ambiguous",
        },
      );
      await store.write(lead.submissionId, lockToken, current);

      dependencies.report?.(
        category === "rejected" ? "provider-rejected" : "provider-ambiguous",
        lead.submissionId,
      );

      if (category === "ambiguous") {
        await dependencies.sleep(300);
        try {
          const recovered = await reconcile(contactId);
          if (recovered) return recovered;
        } catch {
          // The durable ambiguous state forces later retries through reconciliation.
        }
      }
      throw new LeadDeliveryError("unavailable");
    }
  } catch (error) {
    if (error instanceof LeadDeliveryError) throw error;
    dependencies.report?.("state-unavailable", lead.submissionId);
    throw new LeadDeliveryError("unavailable");
  } finally {
    if (!lockCompleted) await store.release(lead.submissionId, lockToken);
  }
}
