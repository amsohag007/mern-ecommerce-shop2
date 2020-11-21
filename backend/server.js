import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//import routes
import userRoutes from "./routes/userRoutes.js";

//app
const app = express();

//db connection here

//routes middleware
app.use(userRoutes);

//
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `server is running on ${process.env.NODE_ENV} mode on port ${port}`
  );
});
