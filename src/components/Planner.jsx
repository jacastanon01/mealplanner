import { useSelector, useDispatch } from "react-redux";
import { selectDay, setCurrentMeal } from "../slices/currentDaySlice";
import { selectMeals, removeMeal } from "../slices/mealsSlice";
import { openModal } from "../slices/modalSlice";
import MealCard from "./MealCard";
import { BiFoodMenu } from "react-icons/bi";
import classes from "./Planner.module.css";
import { mealsInDay } from "../utils/constants";

function Planner() {
  const { currentDay } = useSelector(selectDay);
  const allMeals = useSelector(selectMeals);
  const { mealsList } = allMeals[currentDay];
  const dispatch = useDispatch();

  function isEmpty(mealObj, mealProp) {
    if (Object.hasOwn(mealObj, mealProp)) {
      return Object.keys(mealObj[mealProp]).length === 0;
    } else {
      return false;
    }
  }

  function handleClick(mealTime) {
    dispatch(setCurrentMeal(mealTime));
    dispatch(openModal());
  }

  function onDeleteMeal(mealTime) {
    dispatch(removeMeal({ selectedId: currentDay, mealTime }));
  }

  const renderCards = (mealName) => {
    const name = mealName.toLowerCase();

    const findMeal = mealsList.find((time) => Object.hasOwn(time, name));
    const meals = Object.values(findMeal);
    let meal;
    Array.from(meals, (m) => (meal = m));
    const mealCheck = isEmpty(findMeal, name);

    if (!mealCheck) {
      return (
        <article className={classes.meal}>
          <h1>{mealName}</h1>
          <MealCard
            mealData={meal}
            mealTime={name}
            handleDeleteMeal={onDeleteMeal}
          />
        </article>
      );
    } else {
      return (
        <article className={classes.meal}>
          <h1>{mealName}</h1>
          <div className={classes["meal__box"]}>
            <p>No meals planned. Click below to add a recipe!</p>
            <button
              className={classes["meal__button"]}
              onClick={() => handleClick(name)}
            >
              <BiFoodMenu style={{ margin: "0.5em", fontSize: "1.5em" }} />{" "}
              <span>Add new meal</span>
            </button>
          </div>
        </article>
      );
    }
  };

  return (
    <section className={classes["planner-container"]}>
      {mealsInDay.map((name) => (
        <article key={name} className={classes.meal}>
          {renderCards(name)}
        </article>
      ))}
    </section>
  );
}

export default Planner;
