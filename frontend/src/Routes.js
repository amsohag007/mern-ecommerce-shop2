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
import CreateCategory from "./admin/CreateCategory";
import CreateProduct from "./admin/CreateProduct";

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
        <AdminRoute path="/category/create" exact component={CreateCategory} />
        <AdminRoute path="/product/create" exact component={CreateProduct} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
