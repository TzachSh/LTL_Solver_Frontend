/*
 * action types
 */

export const LOAD_COMPLETE = 'LOAD_COMPLETE'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const FETCH_ALL_MESSAGES = 'FETCH_ALL_MESSAGES'
export const RESET = 'RESET'
export const START_CALCULATE = 'START_CALCULATE'


/*
 * action creators
 */

export function loadComplete(formulas) {
  return { type: LOAD_COMPLETE, formulas: formulas }
}

export function receiveMessage(message) {
  return { type: RECEIVE_MESSAGE, message: message }
}

export function sendMesage(message) {
  return { type: SEND_MESSAGE, message: message }
}

export function fetchAllMessages() {
  return { type: SEND_MESSAGE }
}

export function reset() {
  return { type: RESET }
}

export function startCalculate()
{
  return {type: START_CALCULATE}
}