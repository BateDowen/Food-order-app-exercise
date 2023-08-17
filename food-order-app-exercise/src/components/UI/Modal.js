import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";


const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModuleOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const Modale = (props) => {
    return(
  <Fragment>
    {ReactDOM.createPortal(<Backdrop />, portalElement)}
    {ReactDOM.createPortal(
      <ModuleOverlay>{props.children}</ModuleOverlay>,
      portalElement
    )}
  </Fragment>)
};

export default Modale;
