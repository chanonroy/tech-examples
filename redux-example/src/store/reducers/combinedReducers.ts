import { combineReducers } from "redux";
import { AppAction } from "../actionType";
import { Store } from "../types";
import { counterReducer } from "./counterReducer";

export const combinedReducers = combineReducers<Store, AppAction>({
  counter: counterReducer
})