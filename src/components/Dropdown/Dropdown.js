import React, { useState, useEffect, useRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "./Dropdown.scss";
const Dropdown = () => {
  const dropdownRef = useRef();
  const listRef = useRef();

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
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  useEffect(() => {
    setListHeight(dropdownRef.current.children[1].children[0].clientHeight);
  }, []);

  const array = [1, 2, 3, 4, 5, 6, 7];
  const renderedList = array.map((item) => {
    return <li className="Dropdown__item">{item}</li>;
  });

  const animateDropdown = () => {
    if (openDropdown) {
      return { animation: "openDropdown 0ms both" };
    } else if (openDropdown === false) {
      return { animation: "closeDropdown 300ms both" };
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
        <ul className="Dropdown__list" ref={listRef}>
          {renderedList}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
