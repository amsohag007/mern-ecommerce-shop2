import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../core/Home";
import Signin from "./Signin";
import Signup from "./Signup";
import Menu from "../core/Menu";

const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
