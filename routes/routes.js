import express from "express";
import path from "path";
import JIMP from "jimp";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();
const __dirname = import.meta.dirname;

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/upload", async (req, res) => {
  const fileImage = `img${uuidv4().slice(0, 8)}.jpg`;
  const { img } = req.query;
  const jimpImage = await JIMP.read(img);
  await jimpImage
    .resize(350, JIMP.AUTO)
    .greyscale()
    .writeAsync(`assets/img/${fileImage}`);

  res.sendFile(path.join(__dirname, `../assets/img/${fileImage}`));
});

export default router;
