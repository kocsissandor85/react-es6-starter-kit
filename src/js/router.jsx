import React from "react";
import ReactDOM from "react-dom";
import {browserHistory, Router, Route, IndexRoute} from "react-router";

import App from "./app";
import Page from "./components/page";

var routes, Handler;

routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Page} />
  </Route>
);

function render () {
  ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById("main")
  );
}

/* Simple render. */
render();

/* If you prefer to use immutable data and top-down rendering,
 * hook it up to swap: MyStore.data.on("swap", render);
 */