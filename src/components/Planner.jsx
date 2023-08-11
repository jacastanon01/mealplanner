import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDay } from "../slices/currentDaySlice";
import { selectMeals, removeMeal } from "../slices/mealsSlice";
import { openModal } from "../slices/modalSlice";
import MealCard from "./MealCard";
import { BiFoodMenu } from "react-icons/bi";
import classes from "./Planner.module.css";

function Planner() {
  const { currentDay } = useSelector(selectDay);
  const allMeals = useSelector(selectMeals);
  const { day, mealsList } = allMeals[currentDay];
  const [{ breakfast }, { lunch }, { dinner }] = mealsList;
  console.log(mealsList, lunch);
  const dispatch = useDispatch();

  function isEmpty(mealObj) {
    for (const prop in mealObj) {
      if (Object.prototype.hasOwnProperty.call(mealObj, prop)) {
        return false;
      }
    }
    return true;
  }

  function handleClick(mealTime) {
    dispatch(openModal({ day, mealTime }));
  }

  function onDeleteMeal(mealTime) {
    dispatch(removeMeal({ selectedId: currentDay, mealTime }));
  }
  return (
    <section className={classes["planner-container"]}>
      {!isEmpty(breakfast) ? (
        <article className={classes.meal}>
          <h1>Breakfast</h1>
          <MealCard
            mealData={breakfast}
            mealTime="breakfast"
            handleDeleteMeal={onDeleteMeal}
          />
        </article>
      ) : (
        <article className={classes.meal}>
          <h1>Breakfast</h1>
          <div className={classes["meal__box"]}>
            <p>No meals planned. Click below to add a recipe!</p>
            <button className={classes["meal__button"]} onClick={handleClick}>
              <BiFoodMenu style={{ margin: "0.5em", fontSize: "1.5em" }} />{" "}
              <span>Add new meal</span>
            </button>
          </div>
        </article>
      )}
      {!isEmpty(lunch) ? (
        <article className={classes.meal}>
          <h1>Lunch</h1>
          <MealCard
            mealData={lunch}
            mealTime="lunch"
            handleDeleteMeal={onDeleteMeal}
          />
        </article>
      ) : (
        <article className={classes.meal}>
          <h1>Lunch</h1>
          <div className={classes["meal__box"]}>
            <p>No meals planned. Click below to add a recipe!</p>
            <button className={classes["meal__button"]} onClick={handleClick}>
              <BiFoodMenu style={{ margin: "0.5em", fontSize: "1.5em" }} />{" "}
              <span>Add new meal</span>
            </button>
          </div>
        </article>
      )}
      {!isEmpty(dinner) ? (
        <article className={classes.meal}>
          <h1>Dinner</h1>
          <MealCard
            mealData={dinner}
            mealTime="dinner"
            handleDeleteMeal={onDeleteMeal}
          />
        </article>
      ) : (
        <article className={classes.meal}>
          <h1>Dinner</h1>
          <div className={classes["meal__box"]}>
            <p>No meals planned. Click below to add a recipe!</p>
            <button className={classes["meal__button"]} onClick={handleClick}>
              <BiFoodMenu style={{ margin: "0.5em", fontSize: "1.5em" }} />{" "}
              <span>Add new meal</span>
            </button>
          </div>
        </article>
      )}
    </section>
  );
}

export default Planner;
