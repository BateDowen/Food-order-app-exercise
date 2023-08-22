import { useContext, useState } from "react";
import Modale from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";

const YourCart = (props) => {
  const cartCtx = useContext(CartContext);
console.log(cartCtx);
  const cart = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <div key={item.id} className={classes.total}>
            <li >{item.name}</li>
            <li>x {item.amount}</li>
            <li>${item.price}</li>
          </div>

        );
      })}
    </ul>
  );

  return (
    <Modale>
      {cart}
      <div className={classes.total}>
        <span>Total amount:</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
        <div className={classes.actions}>
          <button className={classes["button--alt"]}>Close</button>
        </div>
      </div>
    </Modale>
    // <ul>{cart}</ul>
  );
};

export default YourCart;
