import express from "express";
const router = express.Router();

import {
  categoryById,
  createCatagory,
  readCategory,
  updateCategory,
  deleteCategory,
  catagoryList,
} from "../controllers/categoryControllers.js";
import {
  requireSignin,
  isAuth,
  isAdmin,
} from "../controllers/authControllers.js";
import { userById } from "../controllers/userControllers.js";

router.get("/category/:categoryId", readCategory);
router.post(
  "/category/create/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  createCatagory
);
router.put(
  "/category/:categoryId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  updateCategory
);
router.delete(
  "/category/:categoryId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  deleteCategory
);
router.get("/categories", catagoryList);

router.param("categoryId", categoryById);
router.param("userId", userById);

export default router;
