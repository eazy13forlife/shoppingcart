import types from "../actions/types.js";

const selectedShoeReducer = (state = null, action) => {
  switch (action.type) {
    case types.SELECT_SHOE:
      return action.payload;
    default:
      return state;
  }
};

export default selectedShoeReducer;
