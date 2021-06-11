import React from "react";
import { Link } from "react-router-dom";
import history from "../../history.js";

import ShoppingBagIcon from "../ShoppingBagIcon/ShoppingBagIcon.js";

import "./_Header.scss";

const Header = ({ pageName }) => {
  const onShoppingBagClick = () => {
    history.push("/cart");
  };

  return (
    <div className="Header">
      <div className="Header__logoandicon">
        <h1 className="heading-logo HomePage__heading-logo">
          <span className="heading-logo--main">The Shoe Store</span>
          <span className="heading-logo--sub">
            limited edition Nikes for the Nike shoe fanataic
          </span>
        </h1>

        <ShoppingBagIcon onClick={onShoppingBagClick} />
      </div>
      <p className="text">{pageName}</p>
    </div>
  );
};

export default Header;
