import express from "express";
const router = express.Router();

import {
  createProduct,
  productById,
  readProduct,
} from "../controllers/productControllers.js";
import {
  requireSignin,
  isAuth,
  isAdmin,
} from "../controllers/authControllers.js";
import { userById } from "../controllers/userControllers.js";

router.get("/product/:productId", readProduct);
router.post(
  "/product/create/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  createProduct
);

router.param("userId", userById);
router.param("productId", productById);

export default router;
