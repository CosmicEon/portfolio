import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import history from "../../../services/history";
import Home from "../../../features/home/Home";
import Portfolio from "../../../features/portfolio/Portfolio";
import Contact from "../../../features/contact/Contact";
import Blog from "../../../features/blog/Blog";
import NotFound from "../../../features/not-found/NotFound";

const RouterContainer = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/not-found" render={() => <NotFound />} />
      <Redirect to="not-found" />
    </Switch>
  </Router>
);

export default RouterContainer;
