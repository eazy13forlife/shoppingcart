import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Dropdown from "../Dropdown/Dropdown.js";
import { selectShoeSize } from "../../actions/";
import "./SelectedShoeModal.scss";

const SelectedShoeModal = () => {
  const dispatch = useDispatch();

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

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShownShoe(shoeImgsArray[arrowClick]);
  }, [arrowClick]);

  const onSizeClick = (size) => {
    const newSize = +size;
    dispatch(selectShoeSize(newSize));
  };

  const onAddToBagClick = () => {
    if (!selectedShoe.size) {
      setShowError(true);
    } else {
      dispatch(addShoe);
    }
  };

  return (
    <div className="SelectedShoeModal">
      <div className="SelectedShoeModal__name">
        <h1 className="large-heading">{selectedShoe.name}</h1>
        <span className="text SelectedShoeModal__price-text">{`$${selectedShoe.price}`}</span>
        <div className="SelectedShoeModal__actions">
          <p className="text SelectedShoeModal__size-text">
            Size:
            <span className="SelectedShoeModal__size-number">
              {selectedShoe.size ? selectedShoe.size : ""}
            </span>
            {showError ? (
              <span className="SelectedShoeModal__error-text">Select Size</span>
            ) : null}
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
            onItemClick={onSizeClick}
          />
          <p
            className="text-button SelectedShoeModal__add-bag"
            onClick={onAddToBagClick}
          >
            Add to bag
          </p>
        </div>
      </div>

      <figure className="SelectedShoeModal__figure">
        <img
          src={shownShoe}
          alt={`${selectedShoe.name}`}
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
