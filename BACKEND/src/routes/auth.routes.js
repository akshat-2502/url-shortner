import express from "express";
import {
  get_current_user,
  login_user,
  register_user,
} from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/register", register_user);
router.post("/login", login_user);
router.get("/me", authMiddleware, get_current_user);

export default router;
