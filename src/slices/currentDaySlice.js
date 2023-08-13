import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentDay: 0,
  currentMeal: "",
};

export const currentDaySlice = createSlice({
  name: "currentDay",
  initialState,
  reducers: {
    setCurrentDay(state, action) {
      state.currentDay = action.payload;
    },
    setCurrentMeal(state, action) {
      state.currentMeal = action.payload;
    },
  },
});

export const selectDay = (state) => state.days;

export const { setCurrentDay, setCurrentMeal } = currentDaySlice.actions;

export default currentDaySlice.reducer;
