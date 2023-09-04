import { useState } from "react";
import classes from "./MealCard.module.css";

function MealCard({ mealData, handleDeleteMeal, mealTime }) {
  const [isFront, setIsFront] = useState(true);

  return (
    <article
      className={
        !isFront ? `${classes.card} ${classes.flip}` : `${classes.card}`
      }
    >
      <div className={classes.front}>
        <h2>{mealData?.title ? mealData.title : "FOOD"}</h2>
        <div
          onClick={() => setIsFront((f) => !f)}
          className={classes.overlay}
        ></div>
        {mealData?.image && <img src={mealData?.image} alt="meal" />}
        <div className={classes["btn-group"]}>
          <button onClick={() => window.open(mealData.sourceUrl, "_blank")}>
            Recipe
          </button>
          <button onClick={() => handleDeleteMeal(mealTime)}>Delete</button>
        </div>
      </div>
      <div className={classes.back} onClick={() => setIsFront((f) => !f)}>
        <p
          dangerouslySetInnerHTML={{
            __html: mealData?.summary || mealData?.instructions,
          }}
        />
      </div>
    </article>
  );
}

export default MealCard;
