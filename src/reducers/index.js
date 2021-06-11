import { combineReducers } from "redux";

import inventoryReducer from "./inventoryReducer.js";
import cartReducer from "./cartReducer.js";
import selectedShoeReducer from "./selectedShoeReducer.js";
import shoeModalReducer from "./shoeModalReducer.js";
import recentlyAddedReducer from "./recentlyAddedReducer.js";

export default combineReducers({
  inventory: inventoryReducer,
  cart: cartReducer,
  selectedShoe: selectedShoeReducer,
  showShoeModal: shoeModalReducer,
  recentlyAdded: recentlyAddedReducer,
});
