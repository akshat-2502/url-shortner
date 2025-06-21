import urlSchema from "../model/short_url.model.js";
export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  const newUrl = new urlSchema({
    full_url: longUrl,
    short_url: shortUrl,
  });
  if (userId) {
    newUrl.user_id = userId;
  }
  await newUrl.save();
};

export const getShortUrl = async (shortUrl) => {
  return await urlSchema.findOneAndUpdate(
    { short_url: shortUrl },
    { $inc: { clicks: 1 } } //if it return the url click in increased by one to update the click in the db
  );
};
