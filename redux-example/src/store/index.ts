import { createStore } from "redux";
import { combinedReducers } from "./reducers/combinedReducers";

export const store = createStore(combinedReducers)