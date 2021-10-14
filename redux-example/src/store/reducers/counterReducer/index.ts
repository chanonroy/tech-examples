import { AnyAction } from "redux";

export interface CounterState {
  count: number
}

const INITIAL_STATE: CounterState = {
  count: 0
}

export const counterReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case "counter/incremented":
      return { count: state.count + 1 };
    case "counter/decremented":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
