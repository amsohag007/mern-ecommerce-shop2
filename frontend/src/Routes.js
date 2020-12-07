import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import NavMenu from "./core/NavMenu";
import PrivateRoute from "./api/PrivateRoute";
import UserDashboard from "./user/UserDashboard";
import AdminRoute from "./api/AdminRoute";
import AdminDashboard from "./admin/AdminDashboard";
import CreateCategory from "./admin/CreateCategory";
import CreateProduct from "./admin/CreateProduct";
import Shop from "./core/Shop";
import ProductDetails from "./core/ProductDetails";
import Cart from "./core/Cart";
import Orders from "./admin/Orders";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import VendorSignup from "./vendor/VendorSignup";
import VendorSignin from "./vendor/VendorSignin";
import VendorDashboard from "./vendor/VendorDashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/cart" exact component={Cart} />
        <Route
          path="/productdetails/:productId"
          exact
          component={ProductDetails}
        />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <PrivateRoute path="/userprofile/:userId" exact component={Profile} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/category/create" exact component={CreateCategory} />
        <PrivateRoute path="/product/create" exact component={CreateProduct} />
        <AdminRoute path="/admin/product" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute path="/admin/orders" exact component={Orders} />
        {/* vendor routes */}
        <Route path="/vendor/signup" exact component={VendorSignup} />
        <Route path="/vendor/signin" exact component={VendorSignin} />
        <PrivateRoute
          path="/vendor/dashboard"
          exact
          component={VendorDashboard}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
