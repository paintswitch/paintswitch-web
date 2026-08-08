import type { LeadSubmission } from "./lead-intake.ts";

export type GhlFieldIds = {
  contactPreference: string;
  serviceType: string;
  projectDescription: string;
  projectLocation: string;
  submissionId: string;
  campaignSource: string;
  campaignName: string;
};

export type GhlConfig = {
  token: string;
  locationId: string;
  pipelineId: string;
  pipelineStageId: string;
  fieldIds: GhlFieldIds;
};

export type GhlDependencies = {
  fetch: typeof fetch;
};

export type GhlProviderErrorCategory = "rejected" | "ambiguous";

const GHL_BASE_URL = "https://services.leadconnectorhq.com";
const GHL_VERSION = "v3";
const PROVIDER_TIMEOUT_MS = 5_000;
const RESPONSE_LIMIT_BYTES = 1_000_000;
const fieldIdKeys = [
  "contactPreference",
  "serviceType",
  "projectDescription",
  "projectLocation",
  "submissionId",
  "campaignSource",
  "campaignName",
] as const;

export class GhlProviderError extends Error {
  readonly category: GhlProviderErrorCategory;

  constructor(category: GhlProviderErrorCategory) {
    super("GoHighLevel request failed");
    this.name = "GhlProviderError";
    this.category = category;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function validProviderId(value: unknown): value is string {
  return typeof value === "string" && /^[a-z0-9-]{10,80}$/iu.test(value);
}

export function loadGhlConfig(environment: NodeJS.ProcessEnv): GhlConfig | null {
  const token = environment.GHL_PRIVATE_INTEGRATION_TOKEN;
  const locationId = environment.GHL_LOCATION_ID;
  const pipelineId = environment.GHL_PIPELINE_ID;
  const pipelineStageId = environment.GHL_PIPELINE_STAGE_ID;
  const rawFieldIds = environment.GHL_CUSTOM_FIELD_IDS;

  if (
    typeof token !== "string" || token.length < 20 || token.length > 500 ||
    !validProviderId(locationId) || !validProviderId(pipelineId) || !validProviderId(pipelineStageId) ||
    typeof rawFieldIds !== "string"
  ) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawFieldIds) as unknown;
    if (!isRecord(parsed)) return null;
    if (Object.keys(parsed).length !== fieldIdKeys.length) return null;
    if (fieldIdKeys.some((key) => !validProviderId(parsed[key]))) return null;

    return {
      token,
      locationId,
      pipelineId,
      pipelineStageId,
      fieldIds: Object.fromEntries(fieldIdKeys.map((key) => [key, parsed[key]])) as GhlFieldIds,
    };
  } catch {
    return null;
  }
}

function responseErrorCategory(status: number): GhlProviderErrorCategory {
  if (status >= 400 && status < 500 && ![408, 409, 425, 429].includes(status)) return "rejected";
  return "ambiguous";
}

async function readLimitedJson(response: Response) {
  const declaredLength = response.headers.get("content-length");
  if (declaredLength && Number(declaredLength) > RESPONSE_LIMIT_BYTES) {
    throw new GhlProviderError("ambiguous");
  }

  if (!response.body) throw new GhlProviderError("ambiguous");

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
        throw new GhlProviderError("ambiguous");
      }
      text += decoder.decode(chunk.value, { stream: true });
    }
    text += decoder.decode();
  } catch (error) {
    if (error instanceof GhlProviderError) throw error;
    throw new GhlProviderError("ambiguous");
  } finally {
    reader.releaseLock();
  }

  try {
    return JSON.parse(text) as unknown;
  } catch {
    throw new GhlProviderError("ambiguous");
  }
}

async function requestJson(
  config: GhlConfig,
  dependencies: GhlDependencies,
  path: string,
  init: { method: "GET" | "POST"; body?: Record<string, unknown> },
) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), PROVIDER_TIMEOUT_MS);

  try {
    const response = await dependencies.fetch(`${GHL_BASE_URL}${path}`, {
      method: init.method,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${config.token}`,
        "Content-Type": "application/json",
        Version: GHL_VERSION,
      },
      body: init.body ? JSON.stringify(init.body) : undefined,
      cache: "no-store",
      signal: controller.signal,
    });
    const body = await readLimitedJson(response);
    if (!response.ok) throw new GhlProviderError(responseErrorCategory(response.status));
    return body;
  } catch (error) {
    if (error instanceof GhlProviderError) throw error;
    throw new GhlProviderError("ambiguous");
  } finally {
    clearTimeout(timeout);
  }
}

function nestedRecord(value: unknown, key: string) {
  if (!isRecord(value)) return null;
  const direct = value[key];
  if (isRecord(direct)) return direct;
  if (isRecord(value.data)) {
    const nested = value.data[key];
    if (isRecord(nested)) return nested;
    if (key === "opportunity" && typeof value.data.id === "string") return value.data;
  }
  return null;
}

function opportunityList(value: unknown) {
  if (!isRecord(value)) return null;
  if (Array.isArray(value.opportunities)) return value.opportunities;
  if (isRecord(value.data) && Array.isArray(value.data.opportunities)) return value.data.opportunities;
  return null;
}

function customFieldValue(field: unknown) {
  if (!isRecord(field)) return null;
  for (const key of ["fieldValue", "value", "field_value"]) {
    if (typeof field[key] === "string") return field[key] as string;
  }
  return null;
}

export function createGhlClient(config: GhlConfig, dependencies: GhlDependencies) {
  async function upsertContact(lead: LeadSubmission) {
    const body = await requestJson(config, dependencies, "/contacts/upsert", {
      method: "POST",
      body: {
        locationId: config.locationId,
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        createNewIfDuplicateAllowed: false,
        customFields: [
          { id: config.fieldIds.contactPreference, fieldValue: lead.contactPreference },
        ],
      },
    });
    const contact = nestedRecord(body, "contact");
    if (!contact || typeof contact.id !== "string" || !validProviderId(contact.id)) {
      throw new GhlProviderError("ambiguous");
    }
    return contact.id;
  }

  async function findOpportunityBySubmission(contactId: string, submissionId: string) {
    const search = new URLSearchParams({
      locationId: config.locationId,
      pipelineId: config.pipelineId,
      contactId,
      limit: "100",
    });
    const body = await requestJson(config, dependencies, `/opportunities/search?${search.toString()}`, {
      method: "GET",
    });
    const opportunities = opportunityList(body);
    if (!opportunities) throw new GhlProviderError("ambiguous");

    for (const candidate of opportunities) {
      if (!isRecord(candidate) || typeof candidate.id !== "string") continue;
      if (candidate.pipelineId !== config.pipelineId || candidate.contactId !== contactId) continue;
      if (!Array.isArray(candidate.customFields)) continue;

      const submissionField = candidate.customFields.find((field) => (
        isRecord(field) && field.id === config.fieldIds.submissionId
      ));
      if (customFieldValue(submissionField) === submissionId) return candidate.id;
    }
    return null;
  }

  async function createOpportunity(lead: LeadSubmission, contactId: string) {
    const opportunityName = `${lead.name} — ${lead.serviceType} quote`.slice(0, 100);
    const body = await requestJson(config, dependencies, "/opportunities/", {
      method: "POST",
      body: {
        pipelineId: config.pipelineId,
        locationId: config.locationId,
        name: opportunityName,
        pipelineStageId: config.pipelineStageId,
        status: "open",
        contactId,
        customFields: [
          { id: config.fieldIds.serviceType, fieldValue: lead.serviceType },
          { id: config.fieldIds.projectDescription, fieldValue: lead.projectDescription },
          { id: config.fieldIds.projectLocation, fieldValue: lead.projectLocation },
          { id: config.fieldIds.submissionId, fieldValue: lead.submissionId },
          { id: config.fieldIds.campaignSource, fieldValue: lead.attribution.source },
          { id: config.fieldIds.campaignName, fieldValue: lead.attribution.campaign },
        ],
      },
    });
    const opportunity = nestedRecord(body, "opportunity");
    if (!opportunity || typeof opportunity.id !== "string" || !validProviderId(opportunity.id)) {
      throw new GhlProviderError("ambiguous");
    }
    return opportunity.id;
  }

  return { createOpportunity, findOpportunityBySubmission, upsertContact };
}
