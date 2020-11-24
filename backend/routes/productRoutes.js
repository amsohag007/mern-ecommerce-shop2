import express from "express";
const router = express.Router();

import { createProduct } from "../controllers/productControllers.js";
import {
  requireSignin,
  isAuth,
  isAdmin,
} from "../controllers/authControllers.js";
import { userById } from "../controllers/userControllers.js";

router.post(
  "/product/create/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  createProduct
);

router.param("userId", userById);

export default router;
