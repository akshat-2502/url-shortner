import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../model/short_url.model.js";

export const createShortUrlService = async (url) => {
  // Add http:// if not already present
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  const shortUrl = await generateNanoId(7);
  const newUrl = new urlSchema({
    full_url: url,
    short_url: shortUrl,
  });
  await newUrl.save();
  return shortUrl;
};
