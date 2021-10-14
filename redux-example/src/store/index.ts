import { useDispatch } from "react-redux";
import { createStore } from "redux";
import { combinedReducers } from "./reducers/combinedReducers";

export const store = createStore(combinedReducers)

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()