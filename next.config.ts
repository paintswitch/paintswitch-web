import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

// D-069 (Google Analytics) and D-075 (Google Ads conversion measurement):
// the Google tag is loaded from googletagmanager.com and reports to the hosts
// below. Frames stay blocked; no remarketing or audience features are enabled.
const googleTagScriptSources = ["https://www.googletagmanager.com"];
const googleTagImageSources = [
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
  "https://www.google.com",
  "https://www.googleadservices.com",
  "https://googleads.g.doubleclick.net",
];
const googleTagConnectSources = [
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
  "https://*.google-analytics.com",
  "https://*.analytics.google.com",
  "https://www.google.com",
  "https://www.googleadservices.com",
  "https://googleads.g.doubleclick.net",
  "https://pagead2.googlesyndication.com",
];

// D-080 (Microsoft Clarity): the Clarity tag loads from clarity.ms and sends
// session data to *.clarity.ms; c.bing.com is used for Clarity's cookie sync.
const claritySources = ["https://www.clarity.ms", "https://*.clarity.ms"];
const clarityImageAndConnectSources = [...claritySources, "https://c.bing.com"];

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""} ${googleTagScriptSources.join(" ")} ${claritySources.join(" ")}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: ${googleTagImageSources.join(" ")} ${clarityImageAndConnectSources.join(" ")}`,
  "font-src 'self'",
  `connect-src 'self'${isDevelopment ? " ws: wss:" : ""} ${googleTagConnectSources.join(" ")} ${clarityImageAndConnectSources.join(" ")}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  ...(isDevelopment ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Permissions-Policy", value: "browsing-topics=(), camera=(), geolocation=(), microphone=(), payment=(), usb=()" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
