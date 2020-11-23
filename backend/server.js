import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";

dotenv.config();

//import routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

//app
const app = express();

//db connection here
connectDB();

//middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());

//routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);

//basic server running port setup
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `server is running on ${process.env.NODE_ENV} mode on port ${port}`.blue
      .bold
  );
});
