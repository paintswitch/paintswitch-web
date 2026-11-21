"use client";

import { useEffect } from "react";
import { sendMeasurementEvent } from "@/lib/measurement-events";

// D-075: counts taps on PaintSwitch phone links. Sends the event name only.
export function PhoneClickMeasurement() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      if (event.target.closest('a[href^="tel:"]')) sendMeasurementEvent("phone_click");
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
