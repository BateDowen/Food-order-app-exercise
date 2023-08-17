import React, { Fragment, useState } from "react";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";
import YourCart from "../Cart/YourCart";

const hasItems = localStorage.length > 0
const HeaderCartButton = (props) => {
  const [isShown,setIsShown]= useState(false);

  function yourCart(event) {
      event.preventDefault();
      setIsShown(current => !current)
  }
  return (
    <Fragment>
      <button id='yourCart' className={classes.button} onClick={yourCart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart </span>
        <span className={classes.badge}>{localStorage.length}</span>
      {/* {isShown && <YourCart />} */}
      </button>
    </Fragment>
  );
};
export default HeaderCartButton;


