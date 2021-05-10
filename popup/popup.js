let button = document.getElementById('theme-builder');

button.addEventListener("click", () => {
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
            "url": bookmark.url,
            "parentId": bookmark.parentId
          });
        });
      });

      // Converts all bookmarks to "Never Gonna Give You Up"
      allBookmarks.forEach(bookmark => {
        chrome.bookmarks.update(bookmark.id, {"url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"})
      });
      
      // Creates file needed to be downloaded
      let file = [];
      var prevParentId;
      const parentIdKey = ['Bookmarks Bar', 'Other Bookmarks', 'Mobile Bookmarks'];

      allBookmarks.forEach(bookmark => {
        if (prevParentId === bookmark.parentId) {
          // pass
        } else {
          prevParentId = bookmark.parentId;
          // For each new section of bookmarks
          if (prevParentId > 1) {
            file.push('\n\n');
          }
          file.push('-> ' + parentIdKey[prevParentId-1] + '\n\n');
        }

        // Appends each bookmark to file variable
        let toBePushed = bookmark.title.padEnd(40) + bookmark.url;
        file.push(toBePushed);
        file.push("\n");
      });

      // Blob of array => URL => Downloaded .txt file
      let blob = new Blob(file, {'type': 'text/plain'});
      let url = URL.createObjectURL(blob);
      chrome.downloads.download({"url": url});
    });
});