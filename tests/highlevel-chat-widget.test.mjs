import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

function source(path) {
  return readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
}

const widget = source("src/components/highlevel-chat-widget.tsx");
const homePage = source("src/app/page.tsx");
const nextConfig = source("next.config.ts");

test("mounts only the approved HighLevel widget on the homepage", () => {
  assert.match(widget, /process\.env\.HIGHLEVEL_CHAT_WIDGET_ENABLED !== "true"/u);
  assert.match(widget, /6a75455fa70a87ea8ede056f/u);
  assert.match(widget, /https:\/\/widgets\.leadconnectorhq\.com\/loader\.js/u);
  assert.match(widget, /https:\/\/widgets\.leadconnectorhq\.com\/chat-widget\/loader\.js/u);
  assert.match(widget, /strategy="lazyOnload"/u);
  assert.doesNotMatch(widget, /dangerouslySetInnerHTML/u);
  assert.match(homePage, /<HighLevelChatWidget \/>/u);
});

test("CSP adds only exact HighLevel origins when chat is enabled", () => {
  assert.match(nextConfig, /HIGHLEVEL_CHAT_WIDGET_ENABLED === "true"/u);
  assert.match(nextConfig, /https:\/\/widgets\.leadconnectorhq\.com/u);
  assert.match(nextConfig, /https:\/\/services\.leadconnectorhq\.com/u);
  assert.match(nextConfig, /wss:\/\/services\.leadconnectorhq\.com/u);
  assert.match(nextConfig, /https:\/\/stcdn\.leadconnectorhq\.com/u);
  assert.doesNotMatch(nextConfig, /https:\s/u);
  assert.doesNotMatch(nextConfig, /wss:\s/u);
  assert.doesNotMatch(nextConfig, /\*\.leadconnectorhq/u);
});
