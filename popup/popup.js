let button = document.getElementById('theme-builder');

button.addEventListener("click", () => {
  // button.innerHTML = "foo";

  // Getting bookmarks tree
  const tree = chrome.bookmarks.getTree();

  // Extracting the result from Promise
  tree.then(function(result) {
      const bookmarkSets = result[0].children;

      let allBookmarks = [];

      // For each set of bookmarks
      bookmarkSets.forEach(bookmarkSet => {
        // For each bookmark in the bookmark set
        bookmarkSet.children.forEach(bookmark => {
          // Certain attributes are appended
          allBookmarks.push({
            "id": bookmark.id,
            "title": bookmark.title,
            "url": bookmark.url
            // 1: 'Bookmarks Bar', 2: 'Other Bookmarks', 3: 'Mobile Bookmarks';
            "parentId": bookmark.parentId
          });
        });
      });

      console.log(allBookmarks);

      /*
      // Converts all bookmarks to "Never Gonna Give You Up"
      allBookmarks.forEach(b => {
        chrome.bookmarks.update(b.id, {"url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"})
      });
      */
  });
});