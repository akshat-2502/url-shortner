import { registerUser } from "../services/auth.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const register_user = wrapAsync(async (req, res) => {
  const { name, email, password } = req.body;
  const token = await registerUser(name, email, password);
  res.status(200).json(token);
});

export const login_user = wrapAsync(async (req, res) => {
  res.send("Login");
});
