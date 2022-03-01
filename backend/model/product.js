import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  price: { type: Number, required: true },
});

const product = mongoose.model("Product", productSchema);

export default product;
