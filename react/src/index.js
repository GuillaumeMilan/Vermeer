import ReactDOM from "react-dom";
import React, { Component } from "react";
import Gallery from "./components/Gallery.js"

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      page: "gallery",
      props: {}
    }
  }

  onChangePage(page, props) {
    this.setState({page: page, props: props})
  }

  render() {
    return {
      "gallery": (() => <Gallery {...this.state.props}/>),
    }[this.state.page]()
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;

