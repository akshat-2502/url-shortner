import express from "express";
import connectDB from "./src/config/mongo.config.js";
import short_url from "./src/routes/short_url.route.js";
import auth_routes from "./src/routes/auth.routes.js";
import dotenv from "dotenv";
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import cors from "cors";
import { errorHandler } from "./src/utils/errorhandler.js";
dotenv.config("./.env");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extented: true }));
app.use(cors());

app.use("/api/create", short_url);
app.get("/:id", redirectFromShortUrl);
app.use("/api/auth", auth_routes);

//error handler
app.use(errorHandler);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
