import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../Header/Header.js";
import ShoeCard from "../ShoeCard/ShoeCard.js";
import SelectedShoeModal from "../SelectedShoeModal/SelectedShoeModal.js";
import "./ShopPage.scss";

const ShopPage = () => {
  const inventory = useSelector((state) => {
    return state.inventory;
  });

  const selectedShoe = useSelector((state) => {
    return state.selectedShoe;
  });

  const renderedShoeList = inventory.map((shoe, index) => {
    return (
      <ShoeCard
        name={shoe.name}
        price={shoe.price}
        imgFront={shoe.imgFront}
        imgMain={shoe.imgMain}
        key={index}
        imgRight={shoe.imgRight}
      />
    );
  });

  return (
    <div className="ShopPage">
      <Header pageName="all shoes" />
      <div className="ShopPage__grid">
        <div className="ShopPage__shoe-grid">{renderedShoeList}</div>
      </div>
      {selectedShoe ? <SelectedShoeModal /> : null}
    </div>
  );
};

export default ShopPage;
