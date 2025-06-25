import express from "express";
import connectDB from "./src/config/mongo.config.js";
import short_url from "./src/routes/short_url.route.js";
import auth_routes from "./src/routes/auth.routes.js";
import user_routes from "./src/routes/user.route.js";
import dotenv from "dotenv";
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./src/utils/errorhandler.js";
import { attachUser } from "./src/utils/attachUser.js";
dotenv.config("./.env");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extented: true }));

app.use(attachUser);

app.use("/api/create", short_url);
app.get("/:id", redirectFromShortUrl);
app.use("/api/auth", auth_routes);
app.use("/api/user", user_routes);

//error handler
app.use(errorHandler);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
