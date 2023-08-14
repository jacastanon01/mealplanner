import { useState } from "react";
import { Outlet } from "react-router-dom";
import WeekList from "./components/WeekList";
import Planner from "./components/Planner";
import { useSelector } from "react-redux";
import { selectMeals } from "./slices/mealsSlice";
import { selectDay } from "./slices/currentDaySlice";
import Header from "./components/Header";
import { days } from "./utils/constants";

function App() {
  const allMeals = useSelector(selectMeals);
  const { currentDay } = useSelector(selectDay);

  return (
    <main style={{ margin: "0 0.5em" }}>
      <Header />
      <section className="container">
        <nav>
          <WeekList days={days} meals={allMeals} />
        </nav>
        {/* <section className="planner-container"> */}
        {/* <h1>{allMeals[currentDay].day}</h1> */}
        <Planner />
        {/* </section> */}
      </section>
    </main>
  );
}

export default App;
