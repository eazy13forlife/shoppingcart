import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

import "./ShoppingBagIcon.scss";

const ShoppingBagIcon = ({ onClick }) => {
  return (
    <div className="shopping-bag" onClick={onClick}>
      <AiOutlineShopping className="shopping-bag__icon" />
      <span className="shopping-bag__bubble">
        <span className="shopping-bag__amount">13</span>
      </span>
    </div>
  );
};

export default ShoppingBagIcon;
