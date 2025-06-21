import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../model/short_url.model.js";
import { saveShortUrl } from "../dao/short_url.js";

export const createShortUrlWithoutUser = async (url) => {
  // Add http:// if not already present
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  const shortUrl = await generateNanoId(7);
  await saveShortUrl(shortUrl, url);
  return shortUrl;
};

export const createShortUrlWithUser = async (url, userId) => {
  // Add http:// if not already present
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  const shortUrl = await generateNanoId(7);
  await saveShortUrl(shortUrl, url, userId);
  return shortUrl;
};
