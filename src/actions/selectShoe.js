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
    },
  };
};

export default selectShoe;
