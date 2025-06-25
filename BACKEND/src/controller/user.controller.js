import { getShortUrl } from "../dao/short_url.js";
import { getAllUserUrl } from "../dao/user.dao.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const getAllUserUrls = wrapAsync(async (req, res) => {
  const { _id } = req.user;
  const urls = await getAllUserUrl(_id.toString());
  res.status(200).json({ message: "Success!", urls });
});
