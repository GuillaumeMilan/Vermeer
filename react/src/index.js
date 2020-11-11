import ReactDOM from "react-dom";
import React, { Component } from "react";
import Gallery from "./components/Gallery.js"
import StudyPage from "./components/StudyPage.js"

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      page: "gallery",
      props: {}
    }
  }

  changePage(page, props) {
    this.setState({page: page, props: props})
  }

  render() {
    const props = {page: this.state.page, props: this.state.props, changePage: this.changePage.bind(this)}
    return {
      "gallery": (() => <Gallery {...props}/>),
      "color-study": (() => <StudyPage {...props}/>),
    }[this.state.page]()
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;

