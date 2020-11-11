import React, { Component } from "react";

class StudyPage extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1> Make a study</h1>
        <div>
          <img src={this.props.props.item.srcUrl}/>
        </div>
      </div>
    );
  }
}

export default StudyPage;
