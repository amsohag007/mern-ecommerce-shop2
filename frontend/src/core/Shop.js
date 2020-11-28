import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore.js";

const Shop = () => {
  return (
    <Layout
      title="Shop Page "
      description="Buy your favourite product here"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-2">Sidebar</div>
        <div className="col-2">Shop Content</div>
      </div>
    </Layout>
  );
};

export default Shop;
