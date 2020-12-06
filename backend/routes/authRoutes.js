import express from "express";
const router = express.Router();
import {
  signup,
  signin,
  signout,
  vendorSignup,
  vendorSignin,
  requireSignin,
} from "../controllers/authControllers.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/vendor/signup", vendorSignup);
router.post("/vendor/signin", vendorSignin);
router.get("/signout", requireSignin, signout);

export default router;
