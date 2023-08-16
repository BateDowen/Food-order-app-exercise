import classes from "./CartItem.module.css";
import Form from "./CartItemForm";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const onAdd = (event) => {
    event.preventDefault();
    const amount = event.target[0].value;
    localStorage.setItem(
      props.name,
      JSON.stringify([props, { quantity: amount }])
    );
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
