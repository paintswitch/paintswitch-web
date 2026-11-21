// D-075: anonymous measurement events sent through the existing Google tag.
// Only the event name is sent. Never pass form values or other personal data.

export type MeasurementEvent = "generate_lead" | "phone_click";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function sendMeasurementEvent(event: MeasurementEvent): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  try {
    window.gtag("event", event);
  } catch {
    // Measurement must never break the page or the lead form.
  }
}
