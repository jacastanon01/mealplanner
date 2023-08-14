import { useEffect, useState } from "react";
import { selectModal, openModal } from "../slices/modalSlice";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./modal/Modal";
import { selectDay } from "../slices/currentDaySlice";
import WeekList from "./WeekList";
import { GiHotMeal } from "react-icons/gi";
import classes from "./Header.module.css";

function Header() {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const { isOpen } = useSelector(selectModal);
  const { currentDay } = useSelector(selectDay);
  const allMeals = useSelector((state) => state.meals);

  //   useEffect(() => {
  //     setWidth(window.innerWidth);
  //     window.addEventListener("resize", () => setWidth(window.innerWidth));
  //     console.log(width);
  //     return (
  //       () => window.removeEventListener("resize"),
  //       () => setWidth(window.innerWidth)
  //     );
  //   }, [width]);

  function handleModal() {
    dispatch(openModal());
  }

  if (isOpen) {
    return <Modal />;
  }
  return (
    <header className={classes.header}>
      <h1>
        What{`'`}s for <GiHotMeal /> this {allMeals[currentDay].day}?
      </h1>
      {/* <div className={classes.icon}>
        <GiHotMeal />
      </div> */}
      {/* <button className="add-btn" onClick={handleModal}>
       + Add new meal
      </button> */}
    </header>
  );
}

export default Header;
