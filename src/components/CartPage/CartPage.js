import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../Header/Header.js";
import CartItem from "../CartItem/CartItem.js";
import CartCheckout from "../CartCheckout/CartCheckout.js";

import "./CartPage.scss";

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
        id={shoe.id}
        key={index}
      />
    );
  });
  return (
    <div className="CartPage">
      <Header pageName="your cart" />
      <div className="CartPage__cart">{renderedCartItems}</div>
      <div className="CartPage__cart-details">
        <CartCheckout />
      </div>
    </div>
  );
};

export default CartPage;
