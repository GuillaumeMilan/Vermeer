
window.images_url = []
chrome.contextMenus.create(
  {
    id: "vermeer-button",
    title: "Save image",
    type: "normal",
    contexts: ["image"],
  });
chrome.contextMenus.onClicked.addListener(function(item, tab) {
  //chrome.extension.getBackgroundPage().console.log('foo', item, tab); NOT WORKING
  window.images_url.push({item: item, tab: tab})
    /*let url =
    'https://google.' + item.menuItemId + '/search?q=' + item.selectionText;
  chrome.tabs.create({url: url, index: tab.index + 1});*/
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'debugger.html'})
})

//subscribe on request from content.js:
//chrome.extension.onMessage.addListener(onRequest);

