import express from "express";
const router = express.Router();

import {
  createProduct,
  productById,
  readProduct,
  deleteProduct,
  updateProduct,
  productList,
  productRelatedlist,
  productCategoryList,
  searchProducts,
  searchByQuery,
  productPhoto,
} from "../controllers/productControllers.js";
import {
  requireSignin,
  isAuth,
  isAdmin,
} from "../controllers/authControllers.js";
import { userById } from "../controllers/userControllers.js";

router.get("/productdetails/:productId", readProduct); //read a single product details
router.post("/product/create/:userId", requireSignin, createProduct);
router.delete(
  "/product/delete/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  deleteProduct
);
router.put(
  "/product/update/:productId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  updateProduct
);

router.get("/products", productList);
router.get("/products/related/:productId", productRelatedlist);
router.get("/products/categories", productCategoryList);
router.post("/products/search", searchProducts); //retun a list of products
router.post("/products/navsearch", searchByQuery);
router.get("/product/photo/:productId", productPhoto);

router.param("userId", userById);
router.param("productId", productById);

export default router;
