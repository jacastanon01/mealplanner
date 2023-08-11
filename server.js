import axios from "axios";
import express from "express";
import cors from "cors";
import "dotenv/config.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.get("/api", async (req, res) => {
//   console.log(req.params);
//   try {
//     console.log(req.body);
//     const { data } = await axios.get(
//       // eslint-disable-next-line no-undef
//       `https://api.spoonacular.com/recipes/extract?apiKey=${process.env.API_KEY}&url=${mealUrl}`
//     );
//     //   console.log(req.body, req.params);
//     res.json(data);
//   } catch (err) {
//     console.log(err);
//   }
// });

let state = null;

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
    // res.send("H");
  } catch (error) {
    console.log(error);
  }
});

app.post("/api", async (req, res) => {
  try {
    const { mealUrl } = req.body;
    const {
      data,
      //   : { title, image, sourceUrl, summary, instructions },
    } = await axios.get(
      `https://api.spoonacular.com/recipes/extract?apiKey=${process.env.API_KEY}&url=${mealUrl}`
    );
    // console.log(title, summary);
    res.json({ data });
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000, () => console.log("connected"));
