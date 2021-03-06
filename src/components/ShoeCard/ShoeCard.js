import React from "react";
import { useDispatch } from "react-redux";
import { selectShoe } from "../../actions/selectShoe.js";

import { openShoeModal } from "../../actions/";
import "./_ShoeCard.scss";

const ShoeCard = ({ name, price, imgFront, imgMain, imgRight }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="ShoeCard"
      onClick={(e) => {
        dispatch(selectShoe(name, price, imgFront, imgMain, imgRight));
        dispatch(openShoeModal());
      }}
    >
      <img src={imgMain} className="ShoeCard__image" />
    </div>
  );
};

export default ShoeCard;
