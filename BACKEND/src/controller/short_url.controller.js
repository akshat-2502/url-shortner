import { createShortUrlService } from "../services/short_url.service.js";

export const createShortUrl = async (req, res) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlService(url);
  res.send(process.env.APP_URL + shortUrl);
};
