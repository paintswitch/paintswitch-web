"use client";

import { useRef, useState, type FormEvent } from "react";
import { parseLeadSubmission } from "@/lib/lead-intake";

type SubmitStatus = "idle" | "validation" | "submitting" | "success" | "error";

const inputFieldNames = [
  "name",
  "phone",
  "email",
  "projectLocation",
  "serviceType",
  "contactPreference",
  "projectDescription",
] as const;

type InputFieldName = (typeof inputFieldNames)[number];
type FieldErrors = Partial<Record<InputFieldName, string>>;

const fieldErrorMessages: Record<InputFieldName, string> = {
  name: "Enter your name.",
  phone: "Enter a valid phone number with an area code.",
  email: "Enter a valid email address.",
  projectLocation: "Enter the project ZIP code or address.",
  serviceType: "Select a painting service.",
  contactPreference: "Select how you prefer to be contacted.",
  projectDescription: "Tell us what you would like painted.",
};

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-sm border border-[#A99D91] bg-white px-4 py-3 text-base text-[#253231] outline-none transition-colors placeholder:text-[#596563] focus:border-[#0658FE] focus:ring-2 focus:ring-[#0658FE]/25";

function attributionValue(value: string | null, fallback = "") {
  const sanitized = (value ?? fallback)
    .replace(/[\u0000-\u001f\u007f]/gu, " ")
    .trim()
    .replace(/\s+/gu, " ")
    .slice(0, 100);

  return sanitized || fallback;
}

export function QuoteRequestForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const submissionIdRef = useRef<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const searchParams = new URLSearchParams(window.location.search);
    const submissionId = submissionIdRef.current ?? crypto.randomUUID();
    const parsed = parseLeadSubmission({
      submissionId,
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      projectLocation: String(formData.get("projectLocation") ?? "").trim(),
      serviceType: String(formData.get("serviceType") ?? "").trim(),
      projectDescription: String(formData.get("projectDescription") ?? "").trim(),
      contactPreference: String(formData.get("contactPreference") ?? "").trim(),
      attribution: {
        source: attributionValue(searchParams.get("utm_source"), "PaintSwitch website"),
        campaign: attributionValue(searchParams.get("utm_campaign")),
      },
    });

    if (!parsed.ok) {
      const nextFieldErrors: FieldErrors = {};
      for (const issue of parsed.issues) {
        if (inputFieldNames.includes(issue as InputFieldName)) {
          const fieldName = issue as InputFieldName;
          nextFieldErrors[fieldName] = fieldErrorMessages[fieldName];
        }
      }

      setFieldErrors(nextFieldErrors);
      setStatus("validation");

      const firstInvalidField = inputFieldNames.find((fieldName) => nextFieldErrors[fieldName]);
      const firstInvalidControl = firstInvalidField ? form.elements.namedItem(firstInvalidField) : null;
      if (firstInvalidControl instanceof HTMLElement) {
        window.requestAnimationFrame(() => firstInvalidControl.focus());
      }
      return;
    }

    submissionIdRef.current = submissionId;
    setFieldErrors({});
    setStatus("submitting");

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 50000);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify(parsed.value),
      });

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean }
        | null;

      if (!response.ok || result?.success !== true) {
        if (response.status === 409) submissionIdRef.current = null;
        throw new Error("Lead delivery failed");
      }

      form.reset();
      submissionIdRef.current = null;
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  return (
    <form
      className="border border-[#A99D91] bg-[#F5F1E8] p-6 text-left shadow-[10px_10px_0_rgba(37,50,49,0.16)] sm:p-8"
      action="/api/leads"
      method="post"
      onSubmit={handleSubmit}
      noValidate
      onChange={(event) => {
        const fieldName = event.target.name as InputFieldName;
        if (inputFieldNames.includes(fieldName) && fieldErrors[fieldName]) {
          setFieldErrors((current) => {
            const next = { ...current };
            delete next[fieldName];
            return next;
          });
        }

        if (status !== "submitting") {
          if (status === "success" || status === "error") setStatus("idle");
        }
      }}
      aria-busy={status === "submitting"}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label htmlFor="name" className="text-sm font-semibold text-[#3D4E4E]">
          Name
          <input id="name" className={fieldClassName} name="name" type="text" autoComplete="name" maxLength={100} required aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "name-error" : undefined} />
          {fieldErrors.name && <span id="name-error" className="mt-2 block text-sm font-medium text-red-700">{fieldErrors.name}</span>}
        </label>

        <label htmlFor="phone" className="text-sm font-semibold text-[#3D4E4E]">
          Phone
          <input id="phone" className={fieldClassName} name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={30} required aria-invalid={Boolean(fieldErrors.phone)} aria-describedby={fieldErrors.phone ? "phone-error" : undefined} />
          {fieldErrors.phone && <span id="phone-error" className="mt-2 block text-sm font-medium text-red-700">{fieldErrors.phone}</span>}
        </label>

        <label htmlFor="email" className="text-sm font-semibold text-[#3D4E4E]">
          Email
          <input id="email" className={fieldClassName} name="email" type="email" autoComplete="email" maxLength={254} required aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "email-error" : undefined} />
          {fieldErrors.email && <span id="email-error" className="mt-2 block text-sm font-medium text-red-700">{fieldErrors.email}</span>}
        </label>

        <label htmlFor="projectLocation" className="text-sm font-semibold text-[#3D4E4E]">
          Project ZIP code or address
          <input id="projectLocation" className={fieldClassName} name="projectLocation" type="text" autoComplete="street-address" maxLength={200} required aria-invalid={Boolean(fieldErrors.projectLocation)} aria-describedby={fieldErrors.projectLocation ? "project-location-error" : undefined} />
          {fieldErrors.projectLocation && <span id="project-location-error" className="mt-2 block text-sm font-medium text-red-700">{fieldErrors.projectLocation}</span>}
        </label>

        <label htmlFor="serviceType" className="text-sm font-semibold text-[#3D4E4E]">
          Service
          <select id="serviceType" className={fieldClassName} name="serviceType" defaultValue="" required aria-invalid={Boolean(fieldErrors.serviceType)} aria-describedby={fieldErrors.serviceType ? "service-error" : undefined}>
            <option value="" disabled>Select a service</option>
            <option value="Interior">Interior painting</option>
            <option value="Exterior">Exterior painting</option>
            <option value="Cabinet">Cabinet painting</option>
            <option value="Commercial">Commercial painting</option>
          </select>
          {fieldErrors.serviceType && <span id="service-error" className="mt-2 block text-sm font-medium text-red-700">{fieldErrors.serviceType}</span>}
        </label>

        <label htmlFor="contactPreference" className="text-sm font-semibold text-[#3D4E4E]">
          Preferred contact method
          <select id="contactPreference" className={fieldClassName} name="contactPreference" defaultValue="" required aria-invalid={Boolean(fieldErrors.contactPreference)} aria-describedby={fieldErrors.contactPreference ? "contact-preference-error" : undefined}>
            <option value="" disabled>Select a preference</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Email">Email</option>
          </select>
          {fieldErrors.contactPreference && <span id="contact-preference-error" className="mt-2 block text-sm font-medium text-red-700">{fieldErrors.contactPreference}</span>}
        </label>
      </div>

      <label htmlFor="projectDescription" className="mt-5 block text-sm font-semibold text-[#3D4E4E]">
        Tell us about your project
        <textarea
          id="projectDescription"
          className={`${fieldClassName} min-h-36 resize-y`}
          name="projectDescription"
          rows={5}
          maxLength={2000}
          placeholder="What would you like painted? Include the rooms or areas and anything else we should know."
          required
          aria-invalid={Boolean(fieldErrors.projectDescription)}
          aria-describedby={fieldErrors.projectDescription ? "project-description-error" : undefined}
        />
        {fieldErrors.projectDescription && <span id="project-description-error" className="mt-2 block text-sm font-medium text-red-700">{fieldErrors.projectDescription}</span>}
      </label>

      <p className="mt-5 text-sm leading-6 text-[#596563]">
        PaintSwitch reviews every request before confirming service availability and pricing.
      </p>

      <p className="mt-4 text-sm leading-6 text-[#596563]">
        By submitting, you confirm that you are at least 18 and ask PaintSwitch to contact you about this project using the contact information you provide. Choosing <strong>Text</strong> records a contact preference only and is not consent to automated SMS. Automated customer SMS is currently disabled. Read our <a className="rounded-sm font-semibold text-[#012765] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0658FE]" href="/privacy">Privacy Policy</a> and <a className="rounded-sm font-semibold text-[#012765] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0658FE]" href="/terms">Website Terms</a>.
      </p>

      <button
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[#012765] px-6 py-3 text-sm font-semibold text-[#F5F1E8] transition-colors hover:bg-[#0658FE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0658FE] disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending request..." : "Request a Quote"}
      </button>

      <div className="mt-5 min-h-14" aria-live="polite" aria-atomic="true">
        {status === "submitting" && <p className="text-sm font-semibold text-[#3D4E4E]">Sending your request…</p>}
        {status === "validation" && (
          <p role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
            Review the highlighted fields, then try again.
          </p>
        )}
        {status === "success" && (
          <p role="status" className="border border-[#012765]/25 bg-white px-4 py-3 text-sm font-semibold text-[#012765]">
            Your request was sent. A PaintSwitch team member will review the details and follow up.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
            We could not confirm that your request was received. Please wait a moment and try again.
          </p>
        )}
      </div>
    </form>
  );
}
