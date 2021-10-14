import {
  DecreaseCounterAction,
  DecreaseCounterPayload,
  DECREASE_COUNTER_ACTION_TYPE,
} from "./types";

export function decreaseCounterAction(
  payload: DecreaseCounterPayload
): DecreaseCounterAction {
  return {
    type: DECREASE_COUNTER_ACTION_TYPE,
    payload,
  };
}
