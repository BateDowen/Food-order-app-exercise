import { useContext } from "react";
import classes from "./CartItem.module.css";
import Form from "./CartItemForm";
import CartContext from "../store/cart-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const onAdd = (event) => {
    event.preventDefault();
    const amount = event.target[0].value;
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount: Number(amount),
      price: props.price
    })
    
  };
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.descripton}>{props.description}</div>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <Form onSubmit={onAdd} />
      </div>
    </li>
  );
};

export default CartItem;
