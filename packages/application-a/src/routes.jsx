import React, { lazy, Component, Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";

//import { AppB } from "application_b/abc"; // when AppB is not default, without lazy load.
import history from "./history";
import AppA from "./app";
//const AppB = lazy(() => import("application_b/abc")); // when AppB is default, lazy load
const AppB = lazy(() =>
  import("application_b/abc").then((module) => ({ default: module.AppB }))
); // when AppB is not default, WITH lazy load.

/*
To import a class/function which is default export,
We just need the name of application and exposes name from webpack config.
But to import a not default class/function, we also need the it's name.
*/

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={AppA} />
            <Route
              path="/appB/:buttonNumber"
              component={AppB}
              //render={(props) => <SayHelloFromB {...props} buttonNumber={1} />}
            />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
