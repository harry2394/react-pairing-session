import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Users } from "./pages/users";
import { Home } from "./pages/home";
import { SingleUser } from "./pages/singleUser";

const router = (
  <Router>
    <Switch>
      <Route path="/users/:id" children={<SingleUser />} />
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(router, document.getElementById("app"));
