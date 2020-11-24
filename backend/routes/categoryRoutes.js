import express from "express";
const router = express.Router();

import { createCatagory } from "../controllers/categoryControllers.js";
import {
  requireSignin,
  isAuth,
  isAdmin,
} from "../controllers/authControllers.js";
import { userById } from "../controllers/userControllers.js";

router.post(
  "/category/create/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  createCatagory
);

router.param("userId", userById);

export default router;
