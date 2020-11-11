import React, { Component } from "react";

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    const bg = chrome.extension.getBackgroundPage()
    return (
      <div>
        {
          bg.images_url.map(function ({item}, k) {
            return (
              <div key={k}>
                <img src={item.srcUrl}/>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Gallery;
