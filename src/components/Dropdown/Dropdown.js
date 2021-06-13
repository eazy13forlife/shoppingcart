import React, { useState, useEffect, useRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "./Dropdown.scss";
const Dropdown = ({ array, onItemClick, setShowError }) => {
  const dropdownRef = useRef();

  const [openDropdown, setOpenDropdown] = useState(null);

  const [listHeight, setListHeight] = useState(0);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
        return;
      } else {
        setOpenDropdown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);

  useEffect(() => {
    setListHeight(dropdownRef.current.children[1].children[0].clientHeight);
  }, []);

  const renderedList = array.map((item, index) => {
    return (
      <li
        className="Dropdown__item"
        key={index}
        onClick={() => {
          onItemClick(item);
          setOpenDropdown(false);
          if (setShowError) {
            setShowError(false);
          }
        }}
      >
        {item}
      </li>
    );
  });

  const animateDropdown = () => {
    if (openDropdown) {
      return { animation: "open 0ms both" };
    } else if (openDropdown === false) {
      return { animation: "close 300ms both" };
    } else {
      return null;
    }
  };

  return (
    <div className="Dropdown" ref={dropdownRef}>
      <button
        className="Dropdown__button"
        onClick={() => {
          if (openDropdown === null) {
            setOpenDropdown(true);
          } else {
            setOpenDropdown(!openDropdown);
          }
        }}
      >
        <RiArrowDownSLine className="Dropdown__arrow-icon" />
      </button>
      <div className={`Dropdown__list-parent`} style={animateDropdown()}>
        <ul className="Dropdown__list">{renderedList}</ul>
      </div>
    </div>
  );
};

export default Dropdown;
