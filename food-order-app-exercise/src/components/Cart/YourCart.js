import { useState } from "react";


const YourCart = (props) => {
  const items = { ...localStorage };
  const [cart, setCart] = useState([]);

  
  if (localStorage.length <= 0) {
   cart.push(<div key='no items'>No items in cart!</div>);

} 
for (let item in items) {
  cart.push(
    <ul key={item}>
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
    <ul>{cart}</ul>
  
  );
};

export default YourCart;
