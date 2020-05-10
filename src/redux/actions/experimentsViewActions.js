/*
 * action types
 */

export const RESET_EXPERIMENTS = 'RESET'
export const FETCHING = 'FETHICNG'
export const COMPLETE_FETCH = 'COMPLETE_FETCH'
export const STOP_FETCH = 'COMPLETE_FETCH'

/*
 * action creators
 */


export function fetching() {
  return { type: FETCHING }
}

export function completeFetch(data) {
  console.log(data);
  return { type: COMPLETE_FETCH , data: data }
}

export function resetExperiments(){
    return { type: RESET_EXPERIMENTS }
}

export function stopFetch(){
    return { type: STOP_FETCH }
}


