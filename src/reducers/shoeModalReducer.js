import types from "../actions/types.js";

const shoeModalReducer = (state = false, action) => {
  switch (action.type) {
    case types.OPEN_SHOE_MODAL:
      return true;
    case types.CLOSE_SHOE_MODAL:
      return false;
    default:
      return state;
  }
};

export default shoeModalReducer;
