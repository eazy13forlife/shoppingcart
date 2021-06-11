import types from "./types.js";

//action creator that adds the shoe we just added to our cart to the recentlyAdded state so our recentlyAdded modal will display with the correct info
const addRecent = (name, size, price, img) => {
  return {
    type: types.ADD_RECENT,
    payload: {
      name,
      size,
      price,
      img,
    },
  };
};

//action creator the removes the shoe we just added to our cart to the recentlyAdded state so our recentlyAdded modal won't show
const removeRecent = () => {
  return {
    type: types.REMOVE_RECENT,
  };
};

export { addRecent, removeRecent };
