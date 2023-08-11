import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [
  {
    id: 0,
    day: "Sunday",
    mealsList: [
      {
        breakfast: {},
      },
      {
        lunch: {},
      },
      {
        dinner: {},
      },
    ],
  },
  {
    id: 1,
    day: "Monday",
    mealsList: [
      {
        breakfast: {},
      },
      {
        lunch: {
          title: "Spinach and Artichoke Quiche",
          image: "https://spoonacular.com/recipeImages/1152409-556x370.jpg",
          sourceUrl:
            "https://www.simplyrecipes.com/recipes/spinach_and_artichoke_quiche/",
          summary:
            'Spinach and Artichoke Quiche might be just the main course you are searching for. This recipe serves 6 and costs $2.3 per serving. One portion of this dish contains approximately <b>16g of protein</b>, <b>44g of fat</b>, and a total of <b>628 calories</b>. Not a lot of people really liked this Mediterranean dish. From preparation to the plate, this recipe takes about <b>3 hours</b>. 1 person were impressed by this recipe. Head to the store and pick up heavy whipping cream, artichoke hearts, green onion greens, and a few other things to make it today. It is brought to you by Simply Recipes. Overall, this recipe earns a <b>pretty good spoonacular score of 49%</b>. Similar recipes include <a href="https://spoonacular.com/recipes/spinach-artichoke-crustless-quiche-1447291">Spinach Artichoke Crustless Quiche</a>, <a href="https://spoonacular.com/recipes/spinach-and-artichoke-quiche-1-points-1374399">Spinach and Artichoke Quiche – 1 Points</a>, and <a href="https://spoonacular.com/recipes/spinach-and-artichoke-quiche-1-points-548538">Spinach and Artichoke Quiche – 1 Points</a>.',
          instructions:
            "Make the dough for the quiche crust: In a medium bowl, whisk together the flour and salt.\nCut the butter into cubes and use your (clean) hands to work the butter into the flour until you have a mixture that looks like a coarse meal with pieces of butter no bigger than a pea.\nSprinkle water onto the flour mixture a little at a time, and work the dough with your hands until the dough can be formed into a ball.\nFlatten the ball into a disk and wrap with plastic wrap. Chill for at least 1 hour.\n\nRoll out the dough: When you are ready to roll out the dough, remove the disk from the refrigerator and let come to room temp for 10 minutes.\nRoll out the dough on a lightly floured surface to a diameter 2 inches wider than your pie or tart pan. Drape the rolled out dough over the pie or tart pan and press the dough into the sides of the pan. Trim and crimp the edges.\nPlace in freezer for 30 minutes to an hour.\n\n(Optional) Pre-bake the crust: At this point, if you want, you can \"blind bake\" or pre-bake the crust. Pre-baking the crust will ensure that the bottom crust is browned and won't get soggy. I often skip this step and find that although the bottom crust might not get browned, it's usually perfectly palatable.\nTo pre-bake a store-bought crust, just follow the directions on the crust package.\nTo pre-bake the homemade crust in this recipe, line the inside with aluminum foil and fill it with pie weights such as beans. The foil and the pie weights will help keep the sides of the crust from sliding down as it bakes.\nBake for 15 minutes at 375°F, then remove the foil and weights, prick the bottom of the crust with the tines of a fork , and bake for another 10 minutes. Let cool down a bit before filling with the quiche custard filling.\n\nCook the shallots: Melt butter in a small saucepan on medium heat. Add the minced shallots and cook 3 to 4 minutes until translucent. Remove from heat.\n\nPrepare the filling: Preheat oven to 375°F. Beat the eggs in a large bowl. Add the goat cheese and whisk until smooth. Whisk in the milk, cream, salt, pepper, chopped spinach, chopped artichokes, the cooked shallots, lemon zest, and the chives.\n\nBake the quiche: Pour filling into the frozen pie crust. (If you are using a tart pan with a removable bottom, you may want to put the pan on a foil lined or rimmed sheet pan.)\nPlace in oven. Bake at 375°F for 10 minutes, then reduce the heat to 350°F and cook for 30 minutes, or until the center of the quiche has set.\n\nLet cook before serving: Remove from oven and let sit and cool to room temperature before slicing and serving.\n ",
        },
      },
      {
        dinner: {},
      },
    ],
  },
  {
    id: 2,
    day: "Tuesday",
    mealsList: [
      {
        breakfast: {},
      },
      {
        lunch: {},
      },
      {
        dinner: {},
      },
    ],
  },
  {
    id: 3,
    day: "Wednesday",
    mealsList: [
      {
        breakfast: {},
      },
      {
        lunch: {},
      },
      {
        dinner: {},
      },
    ],
  },
  {
    id: 4,
    day: "Thursday",
    mealsList: [
      {
        breakfast: {},
      },
      {
        lunch: {},
      },
      {
        dinner: {},
      },
    ],
  },
  {
    id: 5,
    day: "Friday",
    mealsList: [
      {
        breakfast: {},
      },
      {
        lunch: {},
      },
      {
        dinner: {},
      },
    ],
  },
  {
    id: 6,
    day: "Saturday",
    mealsList: [
      {
        breakfast: {},
      },
      {
        lunch: {},
      },
      {
        dinner: {},
      },
    ],
  },
];

const initState = {
  breakfast: [
    {
      id: 0,
      meal: "",
    },
    {
      id: 1,
      meal: "",
    },
    {
      id: 2,
      meal: "",
    },
    {
      id: 3,
      meal: "",
    },
    {
      id: 4,
      meal: "",
    },
    {
      id: 5,
      meal: "",
    },
    {
      id: 6,
      meal: "",
    },
  ],
  lunch: [
    {
      id: 0,
      meal: "",
    },
    {
      id: 1,
      meal: "",
    },
    {
      id: 2,
      meal: "",
    },
    {
      id: 3,
      meal: "",
    },
    {
      id: 4,
      meal: "",
    },
    {
      id: 5,
      meal: "",
    },
    {
      id: 6,
      meal: "",
    },
  ],
  dinner: [
    {
      id: 0,
      meal: "",
    },
    {
      id: 1,
      meal: "",
    },
    {
      id: 2,
      meal: "",
    },
    {
      id: 3,
      meal: "",
    },
    {
      id: 4,
      meal: "",
    },
    {
      id: 5,
      meal: "",
    },
    {
      id: 6,
      meal: "",
    },
  ],
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    addMeal(state, action) {
      const { selectedId, mealData, mealTime } = action.payload;
      const selectedDay = state.find((meal) => meal.id === selectedId);
      if (selectedDay) {
        const selectedMeal = selectedDay.mealsList.find(
          //   (time) => mealTime in time
          (time) => Object.hasOwn(time, mealTime)
        );
        console.log(selectedMeal);
        const { title, image, sourceUrl, summary, instructions } = mealData;
        if (selectedMeal) {
          selectedMeal[mealTime] = {
            title,
            image,
            sourceUrl,
            summary,
            instructions,
          };
        }
      }
    },
    removeMeal(state, action) {
      const { selectedId, mealTime } = action.payload;
      const selectedDay = state.find((meal) => meal.id === selectedId);
      if (selectedDay) {
        const selectedMeal = selectedDay.mealsList.find(
          //   (time) => mealTime in time
          (time) => Object.hasOwn(time, mealTime)
        );
        console.log(selectedMeal);
        selectedMeal[mealTime] = {};
      }
    },
  },
});

// const fetchMealData = createAsyncThunk(
//   "meals/fetchMealData",
//   async (mealUrl) => {
//     const res = await axios.get(`http://localhost:4000/api?mealUrl=${mealUrl}`);
//     return res.json();
//   }
// );

export const selectMeals = (state) => state.meals;

export default mealsSlice.reducer;

export const { addMeal, removeMeal } = mealsSlice.actions;
