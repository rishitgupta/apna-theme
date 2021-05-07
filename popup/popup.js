let button = document.getElementById('theme-builder');

button.addEventListener("click", () => {
  foo = chrome.bookmarks.get(1);
  button.innerHTML = foo;
});
/*
chrome.storage.sync.get("color", ({ color }) => {
    themeBuilder.style.backgroundColor = color;
})

// When the button is clicked, inject setPageBackgroundColor into current page
themeBuilder.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  }
*/