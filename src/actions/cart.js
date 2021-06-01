import types from "./types.js";

//adding a shoe for first time, the quantity is just one. We update the quantity after we get to the cart page using updateQuantity action creator
const addShoe = (name, size) => {
  return (dispatch, getState) => {
    const inventory = getState().inventory;
    const specificShoe = inventory.find((object, index) => {
      return object.name === name;
    });
    return {
      type: types.ADD_SHOE,
      payload: {
        name: name,
        size: size,
        price: specificShoe.price,
      },
    };
  };
};

//we need the id of the shoe we are removing
const removeShoe = (id) => {
  return {
    type: types.REMOVE_SHOE,
    payload: {
      id: id,
    },
  };
};

//we need the id of the shoe we are updating quantity and the new quantity as well. We also pass in name, so we can get the price of the specific shoe.
const updateQuantity = (name, id, quantity) => {
  return (dispatch, getState) => {
    const inventory = getState().inventory;
    const specificShoe = inventory.find((object, index) => {
      return object.name === name;
    });
    return {
      type: types.UPDATE_QUANTITY,
      payload: {
        id: id,
        quantity: quantity,
        price: specificShoe.price,
      },
    };
  };
};

//we need the id of the shoe we are updating size and the new size as well. We also pass in name, so we can get the price of the specific shoe.
const updateSize = (name, id, size) => {
  return (dispatch, getState) => {
    const inventory = getState().inventory;
    const specificShoe = inventory.find((object, index) => {
      return object.name === name;
    });
    return {
      type: types.UPDATE_SIZE,
      payload: {
        id: id,
        size: size,
        price: specificShoe.price,
      },
    };
  };
};
export { addShoe, removeShoe, updateQuantity, updateSize };
