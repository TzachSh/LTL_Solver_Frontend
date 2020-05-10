/*
 * action types
 */

export const RECEIVE_NOTIFICATION = 'RECEIVE_NOTIFICATION'
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION'


/*
 * action creators
 */

export function receiveNotification(message) {
  return { type: RECEIVE_NOTIFICATION, message: message }
}

export function closeNotification() {
  return { type: CLOSE_NOTIFICATION }
}
