import PRODUCT from "../model/product.js";
import asyncHandler from "express-async-handler";

export const getProducts = asyncHandler(async (req, res) => {
  const products = await PRODUCT.find({});

  if (products.length > 0) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
