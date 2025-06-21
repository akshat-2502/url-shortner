import express from "express";
const app = express();
import { nanoid } from "nanoid";
import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/model/shorturl.model.js";
import dotenv from "dotenv";
dotenv.config("./.env");

app.use(express.json());
app.use(express.urlencoded({ extented: true }));

//creating short url
app.post("/api/create", async (req, res) => {
  const { url } = req.body;

  // Add http:// if not already present
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  const shortUrl = nanoid(7);
  const newUrl = new urlSchema({
    full_url: url,
    short_url: shortUrl,
  });
  await newUrl.save();
});

//redirectig to the url
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const url = await urlSchema.findOne({ short_url: id });
  if (url) {
    res.redirect(url.full_url);
  } else {
    res.status(404).send("Not Found");
  }
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
