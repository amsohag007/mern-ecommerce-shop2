import express from "express";
const router = express.Router();

import {
  requireSignin,
  isAuth,
  isAdmin,
} from "../controllers/authControllers.js";
import {
  userById,
  addOrderToUserHistory,
} from "../controllers/userControllers.js";
import {
  listOfOrders,
  getStatusValues,
  orderById,
  updateOrderStatus,
  createOrder,
} from "../controllers/orderControllers.js";
import { decreaseQuantity } from "../controllers/productControllers.js";

router.post(
  "/order/create/:userId",
  requireSignin,
  isAuth,
  addOrderToUserHistory,
  decreaseQuantity,
  createOrder
);

router.get("/order/list/:userId", requireSignin, listOfOrders);
router.get(
  "/order/status-values/:userId",
  requireSignin,

  getStatusValues
);
router.put(
  "/order/:orderId/status/:userId",
  requireSignin,

  updateOrderStatus
);

router.param("userId", userById);
router.param("orderId", orderById);

export default router;
