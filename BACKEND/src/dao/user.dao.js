import User from "../model/user.model.js";
import shortUrl from "../model/short_url.model.js";

export const findUserByEmail = async (email) => {
  return await User.findOne({ email: email });
};

export const findUserByEmailAndPassword = async (email) => {
  return await User.findOne({ email }).select("+password");
};

export const findUserById = async (id) => {
  return await User.findById(id);
};

export const createUser = async (name, email, password) => {
  const newUser = new User({ name, email, password });
  await newUser.save();
  return newUser;
};

export const getAllUserUrl = async (id) => {
  return await shortUrl.find({ user: id });
};
