import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import history from "../../../services/history";
import Home from "../../../features/home/Home";
import NotFound from "../../../features/not-found/NotFound";

const RouterContainer = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/account" component={Account} /> */}
      {/* <Route path="/user/:id" component={User} /> */}
      <Route path="/not-found" render={() => <NotFound />} />
      <Redirect to="not-found" />
    </Switch>
  </Router>
);

export default RouterContainer;
