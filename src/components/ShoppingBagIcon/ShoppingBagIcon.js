import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { AiOutlineShopping } from "react-icons/ai";

import "./ShoppingBagIcon.scss";

const getNumberCartItems = createSelector(
  (state) => state.cart,
  (cart) => {
    let number = 0;
    for (let i = 0; i < cart.length; i++) {
      number += cart[i].quantity;
      if (number === 11) {
        break;
      }
    }
    return number;
  }
);

const ShoppingBagIcon = ({ onClick }) => {
  const numberOfItems = useSelector(getNumberCartItems);

  return (
    <div className="shopping-bag" onClick={onClick}>
      <AiOutlineShopping className="shopping-bag__icon" />
      <span className="shopping-bag__bubble">
        <span className="shopping-bag__amount">
          {numberOfItems > 10 ? "10+" : numberOfItems}
        </span>
      </span>
    </div>
  );
};

export default ShoppingBagIcon;
