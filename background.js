
window.images_url = []
window.debugger = {messages: []}
chrome.contextMenus.create(
  {
    id: "vermeer-button",
    title: "Save image to vermeer",
    type: "normal",
    contexts: ["image"],
  });
chrome.contextMenus.onClicked.addListener(function(item, tab) {
  //chrome.extension.getBackgroundPage().console.log('foo', item, tab); NOT WORKING
  window.images_url.push({item: item, tab: tab})
  chrome.storage.local.get(['images_url'], function(result) {
    chrome.storage.local.set({images_url: (result.images_url || []).concat({item: item, tab: tab})}, () => console.log("Images saved"))
  })
    /*let url =
    'https://google.' + item.menuItemId + '/search?q=' + item.selectionText;
  chrome.tabs.create({url: url, index: tab.index + 1});*/
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: './react/index.html'})
})

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
  window.debugger = window.debugger || {messages: []}
  window.debugger.messages.push({type: "extension", message: message, sender: sender})
  /* Not usable I don't get why */
  if(message == "get_all_images")
    return chrome.storage.local.get(['images_url'], (result) => sendResponse({images_url: result}))
  return sendResponse({error: "Unkown message"})
})

//subscribe on request from content.js:
//chrome.extension.onMessage.addListener(onRequest);

