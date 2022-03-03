import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();

import ProductRouter from "./routes/productRoutes.js";
import UserRouter from "./routes/authRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/api/v1/products", ProductRouter);
app.use("/api/v1/users", UserRouter);

mongoose.connect(process.env.DATABASE_URL, () => {
  console.log("connect database is available");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    "listening on port " + PORT + " at " + process.env.NODE_ENV + " mode"
  );
});
