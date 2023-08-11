import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMeal } from "../../slices/mealsSlice";
import { selectDay } from "../../slices/currentDaySlice";
import { closeModal } from "../../slices/modalSlice";
import classes from "./Modal.module.css";
import { RiAddCircleFill } from "react-icons/ri";
import { useExtractMealDataMutation } from "../../slices/apiSlice";

// TODO set up default values for selects with a custom hook and utils
function AddMealForm() {
  const [mealUrl, setMealUrl] = useState("");
  const { currentDay } = useSelector(selectDay);
  const [selectedId, setSelectedId] = useState(currentDay);
  const [mealTime, setMealTime] = useState("breakfast");
  const dispatch = useDispatch();
  const [getMealData, { isLoading }] = useExtractMealDataMutation();

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
        selectedId: +selectedId,
        mealTime,
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
            <select
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              name="day"
              id="select-day"
            >
              <option value="">Choose a day</option>
              <option value="0">Sunday</option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
            </select>
            <select
              value={mealTime}
              onChange={(e) => setMealTime(e.target.value)}
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
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
            {/* <span> */}
            <button type="submit">
              {/* <PlusCircleIcon /> <IoAddCircle /> */}
              <RiAddCircleFill />
            </button>

            {/* </span> */}
          </div>
        </form>
      )}
    </div>
  );
}

export default AddMealForm;
