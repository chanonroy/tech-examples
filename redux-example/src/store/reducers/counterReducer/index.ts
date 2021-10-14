import { AnyAction } from "redux";
import { DECREASE_COUNTER_ACTION_TYPE } from "../../actions/decreaseCounter/types";
import { INCREASE_COUNTER_ACTION_TYPE } from "../../actions/increaseCounter/types";

export interface CounterState {
  count: number
}

const INITIAL_STATE: CounterState = {
  count: 0
}

export const counterReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case INCREASE_COUNTER_ACTION_TYPE:
      return { ...state, ...action.payload };
    case DECREASE_COUNTER_ACTION_TYPE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
