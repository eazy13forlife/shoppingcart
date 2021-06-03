import React from "react";

import "./_ShoeCard.scss";

const ShoeCard = ({ name, price, imgFront, imgMain, imgRight }) => {
  return (
    <div className="ShoeCard">
      <img src={imgMain} className="ShoeCard__image" />
    </div>
  );
};

export default ShoeCard;
