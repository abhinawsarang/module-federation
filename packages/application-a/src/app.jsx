import React, { Component } from "react";
import history from "./history";

export default class AppA extends Component {
  render() {
    console.log("App 1 render method");
    return (
      <div>
        <h1>Hello from Application A!</h1>
        <button onClick={() => history.push("/appB/1")}>Button-1</button>
        <button onClick={() => history.push("/appB/2")}>Button-2</button>
      </div>
    );
  }
}
