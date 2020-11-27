import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
// import moment from 'moment';

const Card = ({ product }) => {
  return (
    <div className="card">
      <div className="card-header">{product.name}</div>
      <div className="card-body">
        <ShowImage item={product} url="product" />
        <p className="card-p  mt-2">{product.description.substring(0, 100)} </p>
        <p className="card-p black-10">$ {product.price}</p>
        <p className="black-9">
          Category: {product.category && product.category.name}
        </p>
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-outline-primary mt-2 mb-2">
            View Product
          </button>
        </Link>
        <button className="btn btn-outline-primary mt-2 mb-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
