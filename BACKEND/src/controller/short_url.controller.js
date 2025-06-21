import { generateNanoId } from "../utils/helper";

export const createShortUrl = async (req, res) => {
  const { url } = req.body;

  // Add http:// if not already present
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  const shortUrl = generateNanoId(7);
  const newUrl = new urlSchema({
    full_url: url,
    short_url: shortUrl,
  });
  await newUrl.save();
};
