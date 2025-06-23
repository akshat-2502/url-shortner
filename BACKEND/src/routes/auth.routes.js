import express from "express";
import { login_user, register_user } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/register", register_user);
router.post("/login", login_user);

export default router;
