import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../model/short_url.model.js";
import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js";

export const createShortUrlWithoutUser = async (url) => {
  // Add http:// if not already present
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  const shortUrl = await generateNanoId(7);
  if (!shortUrl) throw new Error("Short url not generated");
  await saveShortUrl(shortUrl, url);
  return shortUrl;
};

export const createShortUrlWithUser = async (url, userId, slug = null) => {
  // Add http:// if not already present
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  const shortUrl = slug || generateNanoId(7);
  const exist = await getCustomShortUrl(slug);
  if (exist) throw new Error("This Custom Url Already Exist");
  await saveShortUrl(shortUrl, url, userId);

  return shortUrl;
};
