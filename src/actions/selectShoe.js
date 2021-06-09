import types from "./types.js";

const selectShoe = (name, price, imgFront, imgMain, imgRight) => {
  return {
    type: types.SELECT_SHOE,
    payload: {
      name,
      price,
      imgFront,
      imgMain,
      imgRight,
      size: null,
    },
  };
};

const selectShoeSize = (size) => {
  return {
    type: types.SELECT_SHOE_SIZE,
    payload: size,
  };
};

export { selectShoe, selectShoeSize };
