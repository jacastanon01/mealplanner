import React from "react";
import { setCurrentDay } from "../slices/currentDaySlice";
import { useDispatch, useSelector } from "react-redux";
import { selectMeals } from "../slices/mealsSlice";
import classes from "./WeekList.module.css"

function WeekList({ days }) {
  const allMeals = useSelector(selectMeals);
  const dispatch = useDispatch();
  return (
    <ul className={classes["week-list"]}>
      {allMeals?.map(({ day, id }) => (
        <li key={day}>
          <button
            className={classes["day-btn"]}
            onClick={() => dispatch(setCurrentDay(id))}
          >
            {day}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default WeekList;
