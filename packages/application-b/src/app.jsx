import React, { Component } from "react";
import { render } from "react-dom";
import history from "./history";

export class AppB extends Component {
  render() {
    console.log("Inside application B", this.props.match.params);
    return (
      <div>
        <h1>Application B</h1>
        <h1>
          Button {this.props.match.params.buttonNumber} clicked from Application
          1
        </h1>
      </div>
    );
  }
}
