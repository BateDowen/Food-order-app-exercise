import React, { Fragment, useContext, useState } from "react";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";
import YourCart from "../Cart/YourCart";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const [isShown,setIsShown]= useState(false);

  const cartCtx = useContext(CartContext);
  const numberOfCartItems  = cartCtx.items.reduce((currNumber, item) =>{
    return currNumber + item.amount
  }, 0)
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
        <span className={classes.badge}>{numberOfCartItems}</span>
      {isShown && <YourCart  />}
      </button>
    </Fragment>
  );
};
export default HeaderCartButton;


