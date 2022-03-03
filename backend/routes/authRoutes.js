import express from "express";
import { register, login } from "../controllers/authControllers.js";
const router = express.Router();

router.route("/signup").post(register);
router.route("/login").post(login);

export default router;
