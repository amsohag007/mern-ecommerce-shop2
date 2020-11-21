import express from "express";
const router = express.Router();

import sayHi from "../controllers/userControllers.js";

router.get("/", sayHi);

export default router;
