import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import "./CartCheckout.scss";

const getSubtotal = createSelector(
  (state) => state.cart,
  (cart) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].totalPrice;
    }
    return total;
  }
);

const CartCheckout = () => {
  const subTotal = useSelector(getSubtotal);

  return (
    <div className="CartCheckout">
      <p className="CartCheckout__text">Total</p>
      <p className="CartCheckout__text">{`$${subTotal}`}</p>
      <button className="primary-button primary-button--white CartCheckout__checkout-button">
        Checkout
      </button>
      <button className="primary-button primary-button--white CartCheckout__paypal-button">
        Paypal
      </button>
    </div>
  );
};

export default CartCheckout;
