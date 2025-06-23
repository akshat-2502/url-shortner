import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { cookieOptions } from "../config/config";

export const generateNanoId = (length) => {
  return nanoid(length);
};

export const signToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, cookieOptions);
};
