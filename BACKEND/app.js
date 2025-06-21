import express from "express";
const app = express();
import { nanoid } from "nanoid";

app.use(express.json());
app.use(express.urlencoded({ extented: true }));

app.post("/api/create", (req, res) => {
  const { url } = req.body;
  console.log(url);
  res.send(nanoid(7));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
