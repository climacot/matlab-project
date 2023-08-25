const observer = new MutationObserver((mutationList, observe) => {
  mutationList.forEach((mutation) => {
    const target = mutation.addedNodes;
    target.forEach((node) => {
      if (node instanceof Element) {
        if (node.className === "watch-video--skip-content ltr-gpipej") {
          node.firstElementChild.click();
          observe.disconnect();
        }
      }
    });
  });
});
const element = document.querySelector(".watch-video");
observer.observe(element, { childList: true, subtree: true });
