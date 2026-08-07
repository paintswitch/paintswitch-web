import Script from "next/script";

const HIGHLEVEL_CHAT_WIDGET_ID = "6a75455fa70a87ea8ede056f";
const HIGHLEVEL_CHAT_LOADER_URL = "https://widgets.leadconnectorhq.com/loader.js";
const HIGHLEVEL_CHAT_RESOURCES_URL = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";

export function HighLevelChatWidget() {
  if (process.env.HIGHLEVEL_CHAT_WIDGET_ENABLED !== "true") {
    return null;
  }

  return (
    <Script
      id="paintswitch-highlevel-chat-widget"
      src={HIGHLEVEL_CHAT_LOADER_URL}
      data-resources-url={HIGHLEVEL_CHAT_RESOURCES_URL}
      data-widget-id={HIGHLEVEL_CHAT_WIDGET_ID}
      strategy="lazyOnload"
    />
  );
}
