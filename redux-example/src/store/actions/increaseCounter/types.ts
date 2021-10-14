export interface IncreaseCounterPayload {
    count: number
}

export const INCREASE_COUNTER_ACTION_TYPE = "APP:INCREASE_COUNTER"

export interface IncreaseCounterAction {
    type: typeof INCREASE_COUNTER_ACTION_TYPE;
    payload: IncreaseCounterPayload
}