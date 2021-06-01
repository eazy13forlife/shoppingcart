import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import image from "../../images/maxwell-nelson-NGWwHZeHNVE-unsplash-2.jpg";
import "./App.scss";
import uniqid from "uniqid";
console.log(uniqid());
const allShoes = {
  airMax: {
    name: "Nike air max",
    size: {
      7: {
        quantity: 4,
        totalPrice: 40,
      },
      8: {
        quantity: 4,
        totalPrice: 40,
      },
      10: {
        quantity: 4,
        totalPrice: 40,
      },
    },
  },
  kd5: {
    name: "KD5",
    size: {
      7: {
        quantity: 4,
        totalPrice: 40,
      },
      8: {
        quantity: 4,
        totalPrice: 40,
      },
      10: {
        quantity: 4,
        totalPrice: 40,
      },
    },
  },
};

const allShoesCart = [
  {
    name: "Nike air max",
    sizes: {
      7: {
        quantity: 4,
        totalPrice: 40,
      },
      8: {
        quantity: 4,
        totalPrice: 40,
      },
      10: {
        quantity: 4,
        totalPrice: 40,
      },
    },
  },
  {
    name: "KD5",
    size: {
      7: {
        quantity: 4,
        totalPrice: 40,
      },
      8: {
        quantity: 4,
        totalPrice: 40,
      },
      10: {
        quantity: 4,
        totalPrice: 40,
      },
    },
  },
];
const shoesArray = [
  {
    name: "KD5",
    size: 9,
    quantity: 4,
    totalPrice: 40,
  },
  {
    name: "Nike air max",
    size: 8,
    quantity: 4,
    totalPrice: 40,
  },
];
const value = shoesArray.find((object) => {
  return (object.name = "KD5" && object.size === 9);
});
console.log(value);
const App = () => {
  return null;
};

export default App;
