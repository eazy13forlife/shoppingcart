import { combineReducers } from "redux";

import inventoryReducer from "./inventoryReducer.js";
import cartReducer from "./cartReducer.js";

export default combineReducers({
  inventory: inventoryReducer,
  cart: cartReducer,
});
