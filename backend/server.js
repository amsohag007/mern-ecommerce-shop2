import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

dotenv.config();

//import routes
import userRoutes from "./routes/userRoutes.js";

//app
const app = express();

//db connection here
connectDB();

//routes middleware
app.use(userRoutes);

//
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `server is running on ${process.env.NODE_ENV} mode on port ${port}`.blue
      .bold
  );
});
