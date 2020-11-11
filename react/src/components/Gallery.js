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
        <h1> Your Galery </h1>
        <header>
          {
            this.state.images_url.map(({item}, k) => <div key={k}>
              {/*<div style={self.imageStyle(item.srcUrl)}></div>*/}
              <img src={item.srcUrl} onClick={() => this.props.changePage("color-study", {item: item})}/>
            </div>
            )
          }
        </header>
      </div>
    );
  }
}

export default Gallery;
