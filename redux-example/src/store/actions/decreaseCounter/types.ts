export interface DecreaseCounterPayload {
    count: number
}

export const DECREASE_COUNTER_ACTION_TYPE = "APP:DECREASE_COUNTER"

export interface DecreaseCounterAction {
    type: typeof DECREASE_COUNTER_ACTION_TYPE;
    payload: DecreaseCounterPayload
}