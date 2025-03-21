import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { pArrReducer } from "./pArrReducer";
import { xArrReducer } from "./xArrReducer";

const store = createStore(
  combineReducers({
    pArr: pArrReducer,
    xArr: xArrReducer,
  }),
  composeWithDevTools(),
);

export default store;
