import { selectModal } from "../slices/modalSlice";
import { useSelector} from "react-redux";
import Modal from "./modal/Modal";
import { selectDay } from "../slices/currentDaySlice";
import { GiHotMeal } from "react-icons/gi";
import classes from "./Header.module.css";

function Header() {
  const { isOpen } = useSelector(selectModal);
  const { currentDay } = useSelector(selectDay);
  const allMeals = useSelector((state) => state.meals);

  if (isOpen) {
    return <Modal />;
  }
  return (
    <header className={classes.header}>
      <h1>
        What{`'`}s for <GiHotMeal /> this
        <span style={{ color: "var(--primary)" }}>
          {" "}
          {allMeals[currentDay].day}?
        </span>
      </h1>
    </header>
  );
}

export default Header;
