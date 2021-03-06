import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";

export default () => (
  <Switch>
    <Route exact path={"/dashboard"} component={Home} />
  </Switch>
);
