import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getCategories } from "./apiCore.js";
import Checkbox from "./Checkbox";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Layout
      title="Shop Page "
      description="Buy your favourite product here"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">
          <h4>Filter by category</h4>
          <ui>
            <Checkbox categories={categories} />
          </ui>
        </div>
        <div className="col-8">
          <h4>Content</h4>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
