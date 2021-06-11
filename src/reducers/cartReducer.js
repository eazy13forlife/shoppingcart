import uniqid from "uniqid";

import types from "../actions/types.js";
import inventoryArray from "../inventoryArray.js";

const cartReducer = (state = [], action) => {
  if (action.type === types.ADD_SHOE) {
    const newCart = [...state];
    const specificShoe = newCart.find((shoe, index) => {
      return (
        shoe.name === action.payload.name && shoe.size === action.payload.size
      );
    });
    if (specificShoe) {
      specificShoe.quantity += 1;
      specificShoe.totalPrice = action.payload.quantity * action.payload.price;
      return newCart;
    } else {
      newCart.push({
        name: action.payload.name,
        size: action.payload.size,
        img: action.payload.img,
        quantity: 1,
        totalPrice: 1 * action.payload.price,
        id: uniqid(),
      });
      return newCart;
    }
  }

  if (action.type === types.UPDATE_SIZE) {
    const newCart = [...state];
    const specificShoe = newCart.find((shoe, index) => {
      return shoe.id === action.payload.id;
    });
    specificShoe.size = action.payload.size;
    return newCart;
  }

  if (action.type === types.UPDATE_QUANTITY) {
    const newCart = [...state];
    const specificShoe = newCart.find((shoe, index) => {
      return shoe.id === action.payload.id;
    });
    specificShoe.quantity = action.payload.quantity;
    specificShoe.totalPrice = action.payload.quantity * action.payload.price;
    return newCart;
  }

  if (action.payload === types.REMOVE_SHOE) {
    const newCart = [...state];
    return newCart.filter((shoe, index) => {
      return shoe.id !== action.payload.id ? true : false;
    });
  }

  return state;
};

export default cartReducer;
