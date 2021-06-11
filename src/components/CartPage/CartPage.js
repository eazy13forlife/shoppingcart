import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header.js";

import "./CartPage.scss";
import CartItem from "../CartItem/CartItem.js";

const CartPage = () => {
  const allItems = useSelector((state) => {
    return state.cart;
  });

  const renderedCartItems = allItems.map((shoe, index) => {
    return (
      <CartItem
        name={shoe.name}
        quantity={shoe.quantity}
        size={shoe.size}
        totalPrice={shoe.totalPrice}
        img={shoe.img}
      />
    );
  });
  return (
    <div className="CartPage">
      <Header pageName="your cart" />
      <div className="CartPage__cart">{renderedCartItems}</div>
      <div className="CartPage__cart-details">cart details</div>
    </div>
  );
};

export default CartPage;
