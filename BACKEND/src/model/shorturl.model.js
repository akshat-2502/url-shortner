import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
  full_url: {
    type: String,
    required: true,
  },
  short_url: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

const shortUrl = mongoose.model("shortUrl", shortUrlSchema);
export default shortUrl;
