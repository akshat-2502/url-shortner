import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  anatar: {
    type: String,
    required: false,
    default:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp",
  },
});

const User = mongoose.model("User", userSchema);
export default User;
