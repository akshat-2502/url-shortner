import User from "../model/user.model.js";

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
  return await User.find({ user: id });
};
