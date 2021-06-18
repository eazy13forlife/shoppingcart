import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";

import Dropdown from "../Dropdown/Dropdown.js";
import {
  selectShoeSize,
  addShoe,
  closeShoeModal,
  addRecent,
} from "../../actions/";
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
      if (showError) {
        setShowError(false);
      }
      dispatch(addShoe(selectedShoe.name, selectedShoe.size));
      dispatch(
        addRecent(
          selectedShoe.name,
          selectedShoe.size,
          selectedShoe.price,
          selectedShoe.imgMain
        )
      );
      dispatch(closeShoeModal());
    }
  };

  const onCloseClick = () => {
    dispatch(closeShoeModal());
  };

  return (
    <div className="SelectedShoeModal">
      <button
        className="SelectedShoeModal__close-button"
        onClick={onCloseClick}
      >
        <VscChromeClose className="SelectedShoeModal__close-icon" />
      </button>
      <div className="SelectedShoeModal__name">
        <h1 className="large-heading">{selectedShoe.name}</h1>
        <span className="text--large text--blue SelectedShoeModal__price-text ">{`$${selectedShoe.price}`}</span>
        <div className="SelectedShoeModal__actions">
          <p className="text--large text--blue SelectedShoeModal__size-text">
            Size:
            <span className="text--large text--blue bold">
              {selectedShoe.size ? ` ${selectedShoe.size}` : ""}
            </span>
            {showError ? (
              <span className="SelectedShoeModal__error-text text--small text--red">
                Select Size
              </span>
            ) : null}
          </p>
          <Dropdown
            color="var(--secondary-blue)"
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
            setShowError={setShowError}
          />
          <p
            className="text-button--large text-button text-button--blue SelectedShoeModal__add-bag"
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
