import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import image from "../../images/maxwell-nelson-NGWwHZeHNVE-unsplash-2.jpg";
import "./App.scss";

const newCart = [];
const specificShoe = newCart.find((shoe, index) => {
  return shoe.name === "dog" && shoe.size === "cat";
});
console.log(specificShoe);
const App = () => {
  return null;
};

export default App;
