import types from "../actions/types.js";

const recentlyAddedReducer = (state = null, action) => {
  switch (action.type) {
    case types.ADD_RECENT:
      return action.payload;
    case types.REMOVE_RECENT:
      return null;
    default:
      return state;
  }
};

export default recentlyAddedReducer;
