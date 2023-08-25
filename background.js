chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const isURL = tab.url.includes("https://www.netflix.com/watch/");
  if (changeInfo.status === "complete" && isURL) {
    console.log(tab.url);
    chrome.scripting
      .executeScript({
        target: { tabId },
        files: ["./script.js"],
      })
      .then(() => {
        console.log("SUCCESSFUL INJECTED THE FOREGROUND SCRIPT");
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
