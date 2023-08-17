import { useState } from "react";
import Modale from "../UI/Modal";
import classes from "./Cart.module.css";

const YourCart = (props) => {
  const items = { ...localStorage };
  const [cart, setCart] = useState([]);

  
  if (localStorage.length <= 0) {
   cart.push(<div key='no items'>No items in cart!</div>);

} 
for (let item in items) {
  cart.push(
    <ul key={item} className={classes['cart-items']}>
      {
        <li key={JSON.parse(items[item])[0].name}>
          {JSON.parse(items[item])[0].name} :{" "}
          {JSON.parse(items[item])[1].quantity}
        </li>
      }
    </ul>
  );
}
  return (
    <Modale>
        {cart}
        <div className={classes.total}>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
        </div>
        </div>
    </Modale>
        // <ul>{cart}</ul>
  
  );
};

export default YourCart;
