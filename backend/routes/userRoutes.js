import express from "express";
const router = express.Router();

import {
  userById,
  readProfile,
  updateProfile,
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

router.get("/user/:userId", requireSignin, isAuth, isAdmin, readProfile);
router.put("/user/update/:userId", requireSignin, isAuth, updateProfile);

router.param("/userId", userById);

export default router;
