import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import NavMenu from "./core/NavMenu";
import PrivateRoute from "./api/PrivateRoute";
import UserDashboard from "./user/UserDashboard";
import AdminRoute from "./api/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
const Routes = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
