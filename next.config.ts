import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";
const isHighLevelChatEnabled = process.env.HIGHLEVEL_CHAT_WIDGET_ENABLED === "true";

const highLevelWidgetOrigin = "https://widgets.leadconnectorhq.com";
const highLevelServicesOrigin = "https://services.leadconnectorhq.com";
const highLevelServicesSocketOrigin = "wss://services.leadconnectorhq.com";
const highLevelStaticOrigin = "https://stcdn.leadconnectorhq.com";
const highLevelChatOrigins = `${highLevelWidgetOrigin} ${highLevelServicesOrigin} ${highLevelStaticOrigin}`;

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}${isHighLevelChatEnabled ? ` ${highLevelChatOrigins}` : ""}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob:${isHighLevelChatEnabled ? ` ${highLevelChatOrigins}` : ""}`,
  "font-src 'self'",
  `connect-src 'self'${isDevelopment ? " ws: wss:" : ""}${isHighLevelChatEnabled ? ` ${highLevelChatOrigins} ${highLevelServicesSocketOrigin}` : ""}`,
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
