import { combineReducers } from "redux";
import { Store } from "../types";
import { counterReducer } from "./counterReducer";

export const combinedReducers = combineReducers<Store>({
  counter: counterReducer
})