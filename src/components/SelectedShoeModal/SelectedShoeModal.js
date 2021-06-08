import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Dropdown from "../Dropdown/Dropdown.js";
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

  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    setShownShoe(shoeImgsArray[arrowClick]);
  }, [arrowClick]);

  const onLeftArrowClick = () => {};

  const onSizeClick = (size) => {
    const newSize = +size;
    setSelectedSize(newSize);
  };

  return (
    <div className="SelectedShoeModal">
      <div className="SelectedShoeModal__name">
        <h1 className="large-heading">{selectedShoe.name}</h1>
        <div className="SelectedShoeModal__actions">
          <p className="text SelectedShoeModal__price-text">$322</p>
          <p className="text SelectedShoeModal__size-text">
            Size:
            <span className="SelectedShoeModal__size-number">
              {` ${selectedSize}`}
            </span>
          </p>
          <Dropdown
            array={[
              6,
              6.5,
              7,
              7.5,
              8,
              8.5,
              9.5,
              10,
              10.5,
              11,
              11.5,
              12,
              12.5,
              13,
              14,
              15,
            ]}
            onItemClick={setSelectedSize}
          />
          <p className="text-button SelectedShoeModal__add-bag">Add to bag</p>
        </div>
      </div>

      <figure className="SelectedShoeModal__figure">
        <img
          src={shownShoe}
          alt={`${selectedShoe.name} facing left`}
          className="SelectedShoeModal__image"
        />
        <button className="SelectedShoeModal__button SelectedShoeModal__button--left">
          <IoIosArrowBack
            className="SelectedShoeModal__icon"
            onClick={() => {
              if (arrowClick >= 1) {
                setArrowClick(arrowClick - 1);
              }
            }}
          />
        </button>
        <button className="SelectedShoeModal__button SelectedShoeModal__button--right">
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
    </div>
  );
};

export default SelectedShoeModal;
