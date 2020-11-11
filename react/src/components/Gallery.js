import React, { Component } from "react";

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      images_url: undefined
    };
  }

  componentDidMount() {
    const self = this
    chrome.storage.local.get(['images_url'], function(result) {
      self.setState(result)
    })
  }

  render() {
    if(!this.state.images_url)
      return <div>Loading</div>
    return (
      <div>
        {
          this.state.images_url.map(function ({item}, k) {
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
