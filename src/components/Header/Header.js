import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import history from "../../history.js";

import ShoppingBagIcon from "../ShoppingBagIcon/ShoppingBagIcon.js";

import "./_Header.scss";

const Header = ({ pageName }) => {
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth <= 700) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    });
  }, []);

  const onShoppingBagClick = () => {
    history.push("/cart");
  };

  const onHeadingClick = () => {
    history.push("/shop");
  };

  const renderPage = () => {
    if (!smallScreen) {
      return (
        <div className="Header">
          <div className="Header__logoandicon">
            <h1 className="heading-logo HomePage__heading-logo">
              <span className="heading-logo--main" onClick={onHeadingClick}>
                The Shoe Store
              </span>
              <span className="heading-logo--sub">
                Limited edition Nikes for the Nike shoe fanatic.
              </span>
            </h1>

            <ShoppingBagIcon onClick={onShoppingBagClick} />
          </div>
          <p className="tertiary-heading Header__page-name">{pageName}</p>
        </div>
      );
    } else {
      return (
        <div className="Header">
          <div className="Header__logoandicon">
            <h1 className="heading-logo HomePage__heading-logo">
              <span className="heading-logo--main" onClick={onHeadingClick}>
                The Shoe Store
              </span>
              <span className="heading-logo--sub">
                Limited edition Nikes for the Nike shoe fanatic.
              </span>
            </h1>
          </div>
          <div className="Header__text-bag">
            <h3 className="tertiary-heading Header__page-name">{pageName}</h3>
            <ShoppingBagIcon onClick={onShoppingBagClick} />
          </div>
        </div>
      );
    }
  };
  return renderPage();
};

export default Header;
