import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../../history.js";

import image from "../../images/maxwell-nelson-NGWwHZeHNVE-unsplash-2.jpg";
import "./App.scss";
import HomePage from "../HomePage/HomePage.js";
import ShopPage from "../ShopPage/ShopPage.js";
import CartPage from "../CartPage/CartPage";

const App = () => {
  return (
    <Router history={history}>
      <Route path="/" exact component={HomePage} />
      <Route path="/shop" exact component={ShopPage} />
      <Route path="/cart" exact component={CartPage} />
    </Router>
  );
};

export default App;
