import types from "./types.js";

const openShoeModal = () => {
  return {
    type: types.OPEN_SHOE_MODAL,
  };
};

const closeShoeModal = () => {
  return {
    type: types.CLOSE_SHOE_MODAL,
  };
};

export { openShoeModal, closeShoeModal };
