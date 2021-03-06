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
import VendorRoute from "./api/VendorRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      <Switch>
        {/* for everyone access */}
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

        {/* only for user */}
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <PrivateRoute path="/userprofile/:userId" exact component={Profile} />

        {/* only for admin */}
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/category/create" exact component={CreateCategory} />
        <AdminRoute path="/product/create" exact component={CreateProduct} />
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
        <VendorRoute
          path="/vendor/dashboard"
          exact
          component={VendorDashboard}
        />
        <VendorRoute
          path="/vendor/product/create"
          exact
          component={CreateProduct}
        />
        <VendorRoute path="/vendor/products" exact component={ManageProducts} />
        <VendorRoute
          path="/vendor/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <VendorRoute path="/vendor/orders" exact component={Orders} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
