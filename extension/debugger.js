document.addEventListener('DOMContentLoaded', function () {

  const bg = chrome.extension.getBackgroundPage()
    /*Object.keys(bg.bears).forEach(function (url) {
    const div = document.createElement('div')
    div.textContent = `${url}: ${bg.bears[url]}`
    document.body.appendChild(div)
  })*/
  bg.images_url.forEach(function ({item}) {
    const image = document.createElement('img')
    const paragraph = document.createElement('p').appendChild(image)
    image.src = item.srcUrl
    document.body.appendChild(paragraph)

  })
  console.log("DEBUGGED", bg.images_url)

  // document.querySelector('button').addEventListener('click', onclick, false)
  //
  // function onclick () {
  //   chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
  //     chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
  //   })
  // }
  //
  // function setCount (res) {
  //   const div = document.createElement('div')
  //   div.textContent = `${res.count} bears`
  //   document.body.appendChild(div)
  // }
}, false)
