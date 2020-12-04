import express from "express";
const router = express.Router();

import {
  userById,
  readProfile,
  updateProfile,
  purchaseHistory,
} from "../controllers/userControllers.js";
import {
  requireSignin,
  isAuth,
  isAdmin,
} from "../controllers/authControllers.js";

router.get("/secret", isAuth, (req, res) => {
  res.json({
    user: "got here yay",
  });
});

router.get("/user/:userId", requireSignin, isAuth, readProfile);
router.put("/user/update/:userId", requireSignin, isAuth, updateProfile);
router.get("/orders/by/user/:userId", requireSignin, isAuth, purchaseHistory);

router.param("userId", userById);

export default router;
