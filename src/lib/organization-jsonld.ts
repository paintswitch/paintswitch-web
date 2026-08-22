export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://paintswitch.com/#organization",
    name: "PaintSwitch",
    url: "https://paintswitch.com",
    telephone: "+15715659491",
    email: "hello@paintswitch.com",
    logo: "https://paintswitch.com/images/paintswitch-logo.svg",
    image: "https://paintswitch.com/images/paintswitch-logo.svg",
  };
}
