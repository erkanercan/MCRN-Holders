import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GenerateFud } from "./pages/GenerateFud";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/fud">
          <GenerateFud />
        </Route>
      </Switch>
    </Router>
  );
};
