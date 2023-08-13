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
        lunch: {},
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
