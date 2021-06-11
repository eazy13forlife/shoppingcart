import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import image from "../../images/maxwell-nelson-NGWwHZeHNVE-unsplash-2.jpg";
import "./App.scss";
import HomePage from "../HomePage/HomePage.js";
import ShopPage from "../ShopPage/ShopPage.js";
import CartPage from "../CartPage.js/CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/shop" exact component={ShopPage} />
      <Route path="/cart" exact component={CartPage} />
    </BrowserRouter>
  );
};

export default App;
