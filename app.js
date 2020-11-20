const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//import routes
const userRoutes = require("./routes/userRoutes.js");

//app
const app = express();

//db connection here

//routes middleware
app.use(userRoutes);

//
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
