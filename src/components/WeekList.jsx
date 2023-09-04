import { selectDay, setCurrentDay } from "../slices/currentDaySlice";
import { useDispatch, useSelector } from "react-redux";
import { selectMeals } from "../slices/mealsSlice";
import classes from "./WeekList.module.css";
import SelectDropdown from "./SelectDropdown";

function WeekList({ days }) {
  const allMeals = useSelector(selectMeals);
  const { currentDay } = useSelector(selectDay);
  const dispatch = useDispatch();
  return (
    <>
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
      <div className={classes.dropdown}>
        <SelectDropdown
          options={days}
          value={currentDay}
          setValue={setCurrentDay}
        />
      </div>
    </>
  );
}

export default WeekList;
