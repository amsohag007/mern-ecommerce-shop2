import express from "express";
const router = express.Router();

import { requireSignin, isAuth } from "../controllers/authControllers.js";
import { userById } from "../controllers/userControllers.js";
import {
  generateToken,
  processPayment,
} from "../controllers/braintreeControllers.js";

router.get("/braintree/getToken/:userId", requireSignin, isAuth, generateToken);
router.post(
  "/braintree/payment/:userId",
  requireSignin,
  isAuth,
  processPayment
);

router.param("userId", userById);

export default router;
