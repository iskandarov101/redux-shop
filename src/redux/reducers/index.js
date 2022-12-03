import { combineReducers } from "redux";
import { productReducer, selectedProReducer } from "./productReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProReducer
});