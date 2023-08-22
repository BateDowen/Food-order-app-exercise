import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReduser = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemsIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item);

    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartSate, dispachCartAction] = useReducer(
    cartReduser,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispachCartAction({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispachCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartSate.items,
    totalAmount: cartSate.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
