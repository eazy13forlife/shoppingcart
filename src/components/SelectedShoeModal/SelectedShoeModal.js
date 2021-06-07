import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import "./SelectedShoeModal.scss";

const SelectedShoeModal = () => {
  const selectedShoe = useSelector((state) => {
    return state.selectedShoe;
  });

  const [shownShoe, setShownShoe] = useState(selectedShoe.imgMain);

  const [arrowClick, setArrowClick] = useState(0);

  const [shoeImgsArray, setShoeImgsArray] = useState([
    selectedShoe.imgMain,
    selectedShoe.imgRight,
    selectedShoe.imgFront,
  ]);

  useEffect(() => {
    setShownShoe(shoeImgsArray[arrowClick]);
  }, [arrowClick]);

  const onLeftArrowClick = () => {};
  return (
    <div className="SelectedShoeModal">
      <div className="SelectedShoeModal__container">
        <div className="u-align-center">
          <div className="SelectedShoeModal__name">
            <h1 className="large-heading">{selectedShoe.name}</h1>
            <p className="text">$322</p>
          </div>
        </div>

        <figure className="SelectedShoeModal__figure">
          <button className="SelectedShoeModal__button">
            <IoIosArrowBack
              className="SelectedShoeModal__icon"
              onClick={() => {
                if (arrowClick >= 1) {
                  setArrowClick(arrowClick - 1);
                }
              }}
            />
          </button>

          <img
            src={shownShoe}
            alt={`${selectedShoe.name} facing left`}
            className="SelectedShoeModal__image"
          />
          <button className="SelectedShoeModal__button">
            <IoIosArrowForward
              className="SelectedShoeModal__icon"
              onClick={() => {
                if (arrowClick <= shoeImgsArray.length - 2) {
                  setArrowClick(arrowClick + 1);
                }
              }}
            />
          </button>
        </figure>
        <p className="text">Size</p>
        <select name="shoeSize">
          <option value=""></option>
          <option value="7">7</option>
          <option value="6">6</option>
          <option value="5">5</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
  );
};

export default SelectedShoeModal;
