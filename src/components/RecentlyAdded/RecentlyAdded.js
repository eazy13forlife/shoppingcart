import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoCheckmarkCircle } from "react-icons/io5";

import { removeRecent } from "../../actions/";
import "./RecentlyAdded.scss";

const RecentlyAdded = () => {
  const recentlyAddedRef = useRef();

  const dispatch = useDispatch();

  const recentlyAdded = useSelector((state) => {
    return state.recentlyAdded;
  });

  useEffect(() => {
    const closeRecentlyAdded = (e) => {
      if (
        recentlyAddedRef.current &&
        recentlyAddedRef.current.contains(e.target)
      ) {
        return;
      } else {
        dispatch(removeRecent());
      }
    };
    document
      .querySelector("body")
      .addEventListener("click", closeRecentlyAdded);

    return () => {
      document
        .querySelector("body")
        .removeEventListener("click", closeRecentlyAdded);
    };
  }, []);

  return (
    <div className="RecentlyAdded" ref={recentlyAddedRef}>
      <div className="RecentlyAdded__confirmation">
        <IoCheckmarkCircle className="RecentlyAdded__icon" />
        <p className="RecentlyAdded__header">Added to Bag</p>

        <button className=" RecentlyAdded__button primary-button primary-button--blue">
          View Bag
        </button>
      </div>
      <div className="RecentlyAdded__shoe-info">
        <img
          src={recentlyAdded.img}
          alt={recentlyAdded.name}
          className="RecentlyAdded__image"
        />
        <div className="RecentlyAdded__shoe-details">
          <p className="RecentlyAdded__text RecentlyAdded__text--blue">
            {recentlyAdded.name}
          </p>
          <p className="RecentlyAdded__text RecentlyAdded__text--lightgrey">{`Size ${recentlyAdded.size}`}</p>
          <p className="RecentlyAdded__text RecentlyAdded__text--blue">{`$${recentlyAdded.price}`}</p>
        </div>
      </div>
      <div className="u-align-center">
        <p className="RecentlyAdded__close text-button">close</p>
      </div>
    </div>
  );
};

export default RecentlyAdded;
