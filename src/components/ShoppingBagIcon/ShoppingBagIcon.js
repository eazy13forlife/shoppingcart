import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const ShoppingBagIcon = () => {
  return (
    <div className="shopping-bag">
      <AiOutlineShopping className="shopping-bag__icon" />
      <span className="shopping-bag__bubble">
        <span className="shopping-bag__amount">13</span>
      </span>
    </div>
  );
};

export default ShoppingBagIcon;
