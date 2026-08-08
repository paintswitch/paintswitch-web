export const serviceTypes = ["Interior", "Exterior", "Cabinet", "Commercial"] as const;
export const contactPreferences = ["Call", "Text", "Email"] as const;

export type ServiceType = (typeof serviceTypes)[number];
export type ContactPreference = (typeof contactPreferences)[number];

export type LeadSubmission = {
  submissionId: string;
  name: string;
  phone: string;
  email: string;
  projectLocation: string;
  serviceType: ServiceType;
  projectDescription: string;
  contactPreference: ContactPreference;
  attribution: {
    source: string;
    campaign: string;
  };
};

export type LeadSubmissionParseResult =
  | { ok: true; value: LeadSubmission }
  | { ok: false; issues: string[] };

const topLevelKeys = new Set([
  "submissionId",
  "name",
  "phone",
  "email",
  "projectLocation",
  "serviceType",
  "projectDescription",
  "contactPreference",
  "attribution",
]);

const attributionKeys = new Set(["source", "campaign"]);
const uuidV4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const emailLocalPartPattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+$/iu;
const emailDomainLabelPattern = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/iu;
const emailTopLevelDomainPattern = /^[a-z]{2,63}$/iu;
const singleLineControlPattern = /[\u0000-\u001f\u007f]/u;
const multilineControlPattern = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/u;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizedSingleLine(value: unknown, minimum: number, maximum: number) {
  if (typeof value !== "string" || singleLineControlPattern.test(value)) return null;
  const normalized = value.trim().replace(/\s+/gu, " ");
  return normalized.length >= minimum && normalized.length <= maximum ? normalized : null;
}

function normalizedMultiline(value: unknown, minimum: number, maximum: number) {
  if (typeof value !== "string" || multilineControlPattern.test(value)) return null;
  const normalized = value.replace(/\r\n?/gu, "\n").trim();
  return normalized.length >= minimum && normalized.length <= maximum ? normalized : null;
}

function normalizedPhone(value: unknown) {
  if (typeof value !== "string" || value.length > 30 || singleLineControlPattern.test(value)) return null;
  const compact = value.trim().replace(/[\s().-]/gu, "");

  if (/^\+[1-9]\d{7,14}$/u.test(compact)) return compact;
  if (/^\d{10}$/u.test(compact)) return `+1${compact}`;
  if (/^1\d{10}$/u.test(compact)) return `+${compact}`;

  return null;
}

function normalizedEmail(value: unknown) {
  if (typeof value !== "string" || singleLineControlPattern.test(value)) return null;
  const normalized = value.trim().toLowerCase();
  if (normalized.length > 254) return null;

  const parts = normalized.split("@");
  if (parts.length !== 2) return null;

  const [localPart, domain] = parts;
  if (
    !localPart || localPart.length > 64 ||
    localPart.startsWith(".") || localPart.endsWith(".") || localPart.includes("..") ||
    !emailLocalPartPattern.test(localPart)
  ) {
    return null;
  }

  if (!domain || domain.length > 253 || domain.includes("..")) return null;
  const labels = domain.split(".");
  if (labels.length < 2 || !emailTopLevelDomainPattern.test(labels.at(-1) ?? "")) return null;
  if (labels.some((label) => !emailDomainLabelPattern.test(label))) return null;

  return normalized;
}

function enumValue<T extends readonly string[]>(value: unknown, allowed: T): T[number] | null {
  return typeof value === "string" && allowed.includes(value) ? (value as T[number]) : null;
}

function unexpectedKeys(record: Record<string, unknown>, allowed: Set<string>) {
  return Object.keys(record).filter((key) => !allowed.has(key));
}

export function parseLeadSubmission(input: unknown): LeadSubmissionParseResult {
  if (!isRecord(input)) return { ok: false, issues: ["body"] };

  const issues: string[] = [];
  if (unexpectedKeys(input, topLevelKeys).length > 0) issues.push("body");

  const submissionId = typeof input.submissionId === "string" && uuidV4Pattern.test(input.submissionId)
    ? input.submissionId.toLowerCase()
    : null;
  const name = normalizedSingleLine(input.name, 1, 100);
  const phone = normalizedPhone(input.phone);
  const email = normalizedEmail(input.email);
  const projectLocation = normalizedSingleLine(input.projectLocation, 1, 200);
  const serviceType = enumValue(input.serviceType, serviceTypes);
  const projectDescription = normalizedMultiline(input.projectDescription, 1, 2000);
  const contactPreference = enumValue(input.contactPreference, contactPreferences);

  if (!submissionId) issues.push("submissionId");
  if (!name) issues.push("name");
  if (!phone) issues.push("phone");
  if (!email) issues.push("email");
  if (!projectLocation) issues.push("projectLocation");
  if (!serviceType) issues.push("serviceType");
  if (!projectDescription) issues.push("projectDescription");
  if (!contactPreference) issues.push("contactPreference");

  let source: string | null = null;
  let campaign: string | null = null;

  if (!isRecord(input.attribution)) {
    issues.push("attribution");
  } else {
    if (unexpectedKeys(input.attribution, attributionKeys).length > 0) issues.push("attribution");
    source = normalizedSingleLine(input.attribution.source, 1, 100);
    campaign = normalizedSingleLine(input.attribution.campaign, 0, 100);
    if (!source || campaign === null) issues.push("attribution");
  }

  if (
    issues.length > 0 || !submissionId || !name || !phone || !email || !projectLocation ||
    !serviceType || !projectDescription || !contactPreference || !source || campaign === null
  ) {
    return { ok: false, issues: [...new Set(issues)] };
  }

  return {
    ok: true,
    value: {
      submissionId,
      name,
      phone,
      email,
      projectLocation,
      serviceType,
      projectDescription,
      contactPreference,
      attribution: { source, campaign },
    },
  };
}
