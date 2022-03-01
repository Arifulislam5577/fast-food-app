import mongoose from "mongoose";
import dotenv from "dotenv";
import PRODUCT from "../model/product.js";
import { products } from "./data.js";
dotenv.config();

mongoose.connect(process.env.DATABASE_URL, () => {
  console.log("Connect to database");
});

const seedProducts = async () => {
  try {
    await PRODUCT.deleteMany();
    console.log("Product deleted");
    await PRODUCT.insertMany(products);
    console.log("Product added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedProducts();
