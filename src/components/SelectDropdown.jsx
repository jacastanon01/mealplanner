import { useState } from "react";
import {
  selectDay,
  setCurrentDay,
  setCurrentMeal,
} from "../slices/currentDaySlice";
import { useSelector, useDispatch } from "react-redux";

function SelectDropdown({ options, value, setValue }) {
  const { currentDay, currentMeal } = useSelector(selectDay);
  const dispatch = useDispatch();
  //   const [value, setValue] = useState(options[0]);
  function handleChange(e) {
    dispatch(setValue(e.target.value));
  }
  return (
    <select value={value} onChange={handleChange}>
      {options?.map((option, i) => (
        <option
          value={option.includes("day") ? i : option.toLowerCase()}
          key={i}
        >
          {option}
        </option>
      ))}
    </select>
  );
}

export default SelectDropdown;
