import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, updateSize } from "../../actions/";
import { createSelector } from "reselect";

import Dropdown from "../Dropdown/Dropdown.js";
import "./CartItem.scss";

const CartItem = ({ name, id, quantity, size, totalPrice, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="CartItem">
      <img src={img} alt={name} className="CartItem__image" />
      <h4 className="CartItem__header">{name}</h4>
      <div className="CartItem__action-group CartItem__action-group--quantity">
        <p className="CartItem__text">Quantity:</p>
        <p className="CartItem__text">{quantity}</p>
        <Dropdown
          color="var(--secondary-blue)"
          array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          onItemClick={(item) => {
            dispatch(updateQuantity(name, id, item));
          }}
        />
      </div>

      <div className="CartItem__action-group CartItem__action-group--size">
        <p className="CartItem__text">Size:</p>
        <p className="CartItem__text">{size}</p>
        <Dropdown
          color="var(--secondary-blue)"
          array={[
            6,
            6.5,
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            11.5,
            12,
            12.5,
            13,
            14,
            15,
          ]}
          onItemClick={(item) => {
            dispatch(updateSize(name, id, item));
          }}
        />
      </div>

      <p className="CartItem__text CartItem__text--price">{`$${totalPrice}`}</p>
    </div>
  );
};

export default CartItem;
