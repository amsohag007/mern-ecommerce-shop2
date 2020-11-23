import express from "express";
const router = express.Router();

import { userById } from "../controllers/userControllers.js";
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

router.param("/userId", userById);

export default router;
