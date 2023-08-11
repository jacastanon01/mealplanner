import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentDay: 0,
};

export const currentDaySlice = createSlice({
  name: "currentDay",
  initialState,
  reducers: {
    setCurrentDay(state, action) {
      state.currentDay = action.payload;
    },
  },
});

export const selectDay = (state) => state.days;

export const { setCurrentDay } = currentDaySlice.actions;

export default currentDaySlice.reducer;
