import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";

dotenv.config();

//import routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import braintreeRoutes from "./routes/braintreeRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

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
app.use(cors());

//routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", braintreeRoutes);
app.use("/api", orderRoutes);

//basic server running port setup
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `server is running on ${process.env.NODE_ENV} mode on port ${port}`.blue
      .bold
  );
});
