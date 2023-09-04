import axios from "axios";
import express from "express";
import cors from "cors";
import "dotenv/config.js";
import path from "path";
import compression from "compression";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(compression());

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  console.log(__dirname);
  app.use(express.static(path.join(__dirname, "dist")));

  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "dist")));
} else {
  app.get("/", (req, res) => res.send("server is running"));
}
app.get("/api", async (req, res) => {
  try {
    const { mealUrl } = req.query;
    const {
      data: { title, image, sourceUrl, summary, instructions },
    } = await axios.get(
      `https://api.spoonacular.com/recipes/extract?apiKey=${process.env.API_KEY}&url=${mealUrl}`
    );
    console.log(title, summary);
    res.json({ title, image, sourceUrl, summary, instructions });
  } catch (error) {
    console.log(error);
  }
});

app.post("/api", async (req, res) => {
  try {
    const { mealUrl } = req.body;
    const {
      data,
    } = await axios.get(
      `https://api.spoonacular.com/recipes/extract?apiKey=${process.env.API_KEY}&url=${mealUrl}`
    );
    res.json({ data });
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000, () => console.log("connected"));
