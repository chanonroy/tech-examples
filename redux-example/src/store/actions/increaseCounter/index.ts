import {
  IncreaseCounterAction,
  IncreaseCounterPayload,
  INCREASE_COUNTER_ACTION_TYPE,
} from "./types";

export function increaseCounterAction(
  payload: IncreaseCounterPayload
): IncreaseCounterAction {
  return {
    type: INCREASE_COUNTER_ACTION_TYPE,
    payload,
  };
}
