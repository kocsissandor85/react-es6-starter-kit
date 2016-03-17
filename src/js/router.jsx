import React from "react";
import ReactDOM from "react-dom";
import domready from "domready";
import when from "when";
import {browserHistory, Router, Route, IndexRoute} from "react-router";

import App from "./app";
import Page from "./components/page";
import Store from "./stores/store";

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

function initialRender () {
  return when.promise(render);
}

Store.data.on("next-animation-frame", render);
domready(() => initialRender());