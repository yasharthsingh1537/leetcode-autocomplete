interface ContentScriptReadyMessage {
  type: "CONTENT_SCRIPT_READY";
  pageUrl: string;
}

chrome.runtime.onInstalled.addListener((details) => {
  console.info("[LeetCode AutoComplete] Extension installed:", details.reason);
});

chrome.runtime.onMessage.addListener(
  (message: ContentScriptReadyMessage, sender, sendResponse) => {
    if (message.type === "CONTENT_SCRIPT_READY") {
      console.info(
        "[LeetCode AutoComplete] Message received from content script:",
        {
          tabId: sender.tab?.id,
          url: message.pageUrl,
        },
      );

      sendResponse({
        ok: true,
        message: "Background received the content script message.",
      });
    }
  },
);
