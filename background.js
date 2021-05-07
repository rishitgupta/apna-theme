const tree = chrome.bookmarks.getTree();

tree.then(function(result) {
    const bookmarks = result[0].children;
    
    // console.log(bookmarks);

    let bar = bookmarks[0];
    let other = bookmarks[1];

    // console.log(bar);
    // console.log(other);

    // chrome.bookmarks.update("62", {"title": "Chal gaya brooooo"})
});