import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeRecent } from "../../actions/";
import Header from "../Header/Header.js";
import ShoeCard from "../ShoeCard/ShoeCard.js";
import SelectedShoeModal from "../SelectedShoeModal/SelectedShoeModal.js";
import RecentlyAdded from "../RecentlyAdded/RecentlyAdded.js";
import "./ShopPage.scss";

const ShopPage = (props) => {
  console.log(props.mounted);
  const dispatch = useDispatch();

  const recentlyAdded = useSelector((state) => {
    return state.recentlyAdded;
  });
  const inventory = useSelector((state) => {
    return state.inventory;
  });

  const selectedShoe = useSelector((state) => {
    return state.selectedShoe;
  });

  const showShoeModal = useSelector((state) => {
    return state.showShoeModal;
  });

  const [showAddedToCart, setShowAddedToCart] = useState(false);

  useEffect(() => {
    if (recentlyAdded) {
      setTimeout(() => {
        dispatch(removeRecent());
      }, 3000);
    }
  }, [recentlyAdded]);

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
      {recentlyAdded ? <RecentlyAdded /> : null}
      <Header pageName="all shoes" />
      <div className="ShopPage__grid">
        <div className="ShopPage__shoe-grid">{renderedShoeList}</div>
      </div>
      {showShoeModal ? <SelectedShoeModal /> : null}
    </div>
  );
};

export default ShopPage;
