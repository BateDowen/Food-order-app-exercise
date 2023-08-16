import { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import Card from "../UI/Card";
import classes from "./HeaderCartButton.module.css";
import YourCart from "../Cart/YourCart";

const HeaderCartButton = (props) => {
  return (
    <Fragment>
      <button className={classes.button} onClick={yourCart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart </span>
        <span className={classes.badge}>{localStorage.length}</span>
      <YourCart />
      </button>
    </Fragment>
  );
};
export default HeaderCartButton;


function yourCart(event) {
  event.preventDefault();
 
 
}
