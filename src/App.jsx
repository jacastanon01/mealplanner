import WeekList from "./components/WeekList";
import Planner from "./components/Planner";
import { useSelector } from "react-redux";
import { selectMeals } from "./slices/mealsSlice";
import Header from "./components/Header";
import { days } from "./utils/constants";

function App() {
  const allMeals = useSelector(selectMeals);
  return (
    <main style={{ margin: "0 0.5em" }}>
      <Header />
      <section className="container">
        <nav>
          <WeekList days={days} meals={allMeals} />
        </nav>
        <Planner />
      </section>
    </main>
  );
}

export default App;
