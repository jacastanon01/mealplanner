import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMeal } from "../../slices/mealsSlice";
import {
  selectDay,
  setCurrentMeal,
  setCurrentDay,
} from "../../slices/currentDaySlice";
import { closeModal } from "../../slices/modalSlice";
import classes from "./Modal.module.css";
import { RiAddCircleFill } from "react-icons/ri";
import { useExtractMealDataMutation } from "../../slices/apiSlice";
import { days, mealsInDay } from "../../utils/constants";
import SelectDropdown from "../SelectDropdown";

function AddMealForm() {
  const [mealUrl, setMealUrl] = useState("");
  const { currentDay, currentMeal } = useSelector(selectDay);
  const [selectedId, setSelectedId] = useState(currentDay);
  const [mealTime, setMealTime] = useState(currentMeal);
  const dispatch = useDispatch();
  const [getMealData, { isLoading }] = useExtractMealDataMutation();
  console.log(currentMeal, "CURRENT MEAL", mealTime);

  async function handleSubmit(e) {
    e.preventDefault();

    if (mealUrl === "" || selectedId === "") {
      alert("Enter information");
      return;
    }

    console.log(mealUrl);
    const { data } = await getMealData({ mealUrl }).unwrap();

    dispatch(
      addMeal({
        selectedId: +currentDay,
        mealTime: currentMeal.toLowerCase(),
        mealData: { ...data },
      })
    );
    dispatch(closeModal());
  }

  return (
    <div className={classes.modal}>
      <h3>Add a meal for</h3>
      {isLoading ? (
        <p>Adding recipe to planner...</p>
      ) : (
        <form onSubmit={handleSubmit} className={classes["add-meal-form"]}>
          <div className={classes["select-controls"]}>
            <SelectDropdown
              options={days}
              value={currentDay}
              setValue={setCurrentDay}
            />
            <SelectDropdown
              options={mealsInDay}
              value={currentMeal}
              setValue={setCurrentMeal}
            />
          </div>
          <label htmlFor="meal-url">Link</label>
          <div className={classes["input-controls"]}>
            <input
              type="url"
              className={classes["meal-input"]}
              value={mealUrl}
              onChange={(e) => setMealUrl(e.target.value)}
              placeholder="https://www.budgetbytes.com/coconut-curry-chickpeas/"
            />
            <button type="submit">
              <RiAddCircleFill />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddMealForm;
