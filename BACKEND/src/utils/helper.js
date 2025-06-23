import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { cookieOptions } from "../config/config.js";

export const generateNanoId = (length) => {
  return nanoid(length);
};

export const signToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5m" });
};

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded.id;
};
