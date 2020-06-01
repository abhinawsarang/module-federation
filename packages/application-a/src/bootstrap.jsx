import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import App from "./app";
//ReactDOM.render(<App routes={Routes} />, document.getElementById("root"));

ReactDOM.render(
  <Router>
    <div className="App">
      <Routes />
    </div>
  </Router>,
  document.getElementById("root")
);
