import { useState } from "react";
import { Outlet } from "react-router-dom";
import WeekList from "./components/WeekList";
import Planner from "./components/Planner";
import { useSelector } from "react-redux";
import { selectMeals } from "./slices/mealsSlice";
import { selectDay } from "./slices/currentDaySlice";
import Header from "./components/Header";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function App() {
  const allMeals = useSelector(selectMeals);
  const { currentDay } = useSelector(selectDay);

  return (
    <>
      <Header />
      <main className="container">
        <aside>
          <WeekList days={days} meals={allMeals} />
        </aside>
        {/* <section className="planner-container"> */}
        {/* <h1>{allMeals[currentDay].day}</h1> */}
        <Planner />
        {/* </section> */}
      </main>
    </>
  );
}

export default App;
