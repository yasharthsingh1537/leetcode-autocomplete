console.info(
  "[Leetcode AutoComplete] Content script loaded:",
  window.location.href,
);

chrome.runtime.sendMessage(
  {
    type: "CONTENT_SCRIPT_READY",
    pageUrl: window.location.href,
  },
  (response) => {
    if (chrome.runtime.lastError) {
      console.warn(
        "[Leetcode AutoComplete] Message failed:",
        chrome.runtime.lastError.message,
      );
      return;
    }
    console.info("[Leetcode AutoComplete] Background resoponse:", response);
  },
);
