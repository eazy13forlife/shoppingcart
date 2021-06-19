import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1 className="heading-logo HomePage__heading-logo">
        <span className="heading-logo--main">The Shoe Store</span>
        <span className="heading-logo--sub">
          Limited edition Nikes for the Nike shoe fanatic.
        </span>
      </h1>
      <Link to="/shop" className="text-button__link HomePage__shop">
        <p className="text-button text-button--large ">Shop</p>
      </Link>
      <Link to="/cart" className=" text-button__link HomePage__cart">
        <p className="text-button text-button--large">Cart</p>
      </Link>
    </div>
  );
};

export default HomePage;
