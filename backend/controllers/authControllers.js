import USER from "../model/user.js";
import asyncHandler from "express-async-handler";
import { generateToken } from "../utils/generateToken.js";

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const isExistUser = await USER.findOne({ email });

  if (isExistUser) {
    return res.status(400).json({ message: "User already exists" });
  } else {
    const user = await USER.create({ name, email, password });
    if (user) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    }
  }
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await USER.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).json({ message: "Invalid Email Or Password" });
  }
});
