import { CounterState } from "./reducers/counterReducer";

export interface Store {
    counter: CounterState;
  }