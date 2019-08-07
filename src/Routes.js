import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Events from "./containers/Events";
import Event from "./containers/Event";
import Education from "./containers/Education";
import Gallery from "./containers/Gallery";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Newsletter from "./containers/Newsletter";
import NotFound from "./containers/NotFound";


export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/events" exact component={Events} />
    <Route path="/events/:id" exact component={Event} />
    <Route path="/education" exact component={Education} />
    <Route path="/gallery" exact component={Gallery} />
    <Route path="/aboutus" exact component={About} />
    <Route path="/contactus" exact component={Contact} />
    <Route path="/newsletter" exact component={Newsletter} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
