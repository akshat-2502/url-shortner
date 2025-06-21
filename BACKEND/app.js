import express from "express";
const app = express();
import { nanoid } from "nanoid";
import urlSchema from "./src/model/short_url.model.js";
import connectDB from "./src/config/mongo.config.js";
import short_url from "./src/routes/short_url.route.js";
import dotenv from "dotenv";
dotenv.config("./.env");

app.use(express.json());
app.use(express.urlencoded({ extented: true }));

//creating short url
app.use("/api/create", short_url);

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
