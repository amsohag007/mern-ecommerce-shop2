import express from "express";
const router = express.Router();

import { signup, signin, signout } from "../controllers/userControllers.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);

export default router;
