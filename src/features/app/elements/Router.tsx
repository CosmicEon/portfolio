import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import history from "../../../services/history";
import About from "../../../features/about/About";
import Portfolio from "../../../features/portfolio/Portfolio";
import PortfolioDetail from "../../../features/portfolio-detail/PortfolioDetail";
import Contact from "../../../features/contact/Contact";
import Blog from "../../../features/blog/Blog";
import BlogDetail from "../../../features/blog-detail/BlogDetail";
import NotFound from "../../../features/not-found/NotFound";

const RouterContainer = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/about" />} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/portfolio/:id" component={PortfolioDetail} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/:id" component={BlogDetail} />
      <Route exact path="/not-found" render={() => <NotFound />} />
      <Redirect to="not-found" />
    </Switch>
  </Router>
);

export default RouterContainer;
