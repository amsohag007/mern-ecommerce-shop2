const express = require("express");
const router = express.Router();

const { sayHi } = require("../controllers/userControllers.js");

router.get("/", sayHi);

module.exports = router;
