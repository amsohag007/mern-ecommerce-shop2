import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../api";
import { Link } from "react-router-dom";
// import { getPurchaseHistory } from "./apiUser";
// import moment from "moment";

const VendorDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const vendorLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Vendor Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/category/create">
              Create New Category
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/product/create">
              Create New Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to={`/admin/product`}>
              Manage Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to={`/admin/orders`}>
              Manage Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const vendorInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 2 ? "Vendor" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title="Vendor Dashboard"
      description={`G'day ${name}!`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-3">{vendorLinks()}</div>
        <div className="col-9">{vendorInfo()}</div>
      </div>
    </Layout>
  );
};

export default VendorDashboard;
