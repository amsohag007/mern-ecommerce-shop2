import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../core/Home";
import Signin from "./Signin";
import Signup from "./Signup";
import Menu from "../core/Menu";
import PrivateRoute from "../api/PrivateRoute";
import UserDashboard from "./UserDashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
