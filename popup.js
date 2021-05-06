let themeBuilder = document.getElementById('theme-builder');

chrome.storage.sync.get("color", ({ color }) => {
    themeBuilder.style.backgroundColor = color;
})