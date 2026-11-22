// D-075: anonymous measurement events sent through the existing Google tag.
// Only the event name is sent. Never pass form values or other personal data.

export type MeasurementEvent = "generate_lead" | "phone_click";

// D-078: the Google Ads conversion action "Quote request form" in account
// 443-423-2109. Sent only after a quote request is accepted, with no data
// beyond the destination label.
const QUOTE_REQUEST_CONVERSION = "AW-18587255883/b5Z2CKrui70dEMuIjJ9F";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function sendMeasurementEvent(event: MeasurementEvent): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  try {
    window.gtag("event", event);
    if (event === "generate_lead") {
      window.gtag("event", "conversion", { send_to: QUOTE_REQUEST_CONVERSION });
    }
  } catch {
    // Measurement must never break the page or the lead form.
  }
}
