import { useDispatch } from "react-redux";
import { closeModal } from "../../slices/modalSlice";
import classes from "./Modal.module.css";

function Backdrop() {
  const dispatch = useDispatch();
  return (
    <div
      className={classes.backdrop}
      onClick={() => dispatch(closeModal())}
    ></div>
  );
}

export default Backdrop;
