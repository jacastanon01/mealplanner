import ReactDOM from "react-dom";
import AddMealForm from "./AddMealForm";
import Backdrop from "./Backdrop";

function Modal() {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <AddMealForm />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default Modal;
