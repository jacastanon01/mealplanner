import { createSlice } from "@reduxjs/toolkit";

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

export const selectMeals = (state) => state.meals;

export default mealsSlice.reducer;

export const { addMeal, removeMeal } = mealsSlice.actions;
