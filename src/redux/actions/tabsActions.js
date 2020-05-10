/*
 * action types
 */

export const CHANGE_TAB = 'CHANGE_TAB'

/*
 * other constants
 */

export const View = {
  MAIN: 0,
  EXPERIMENTS: 1,
  ABOUT: 2
}

/*
 * action creators
 */

export function changeTab(selectedView) {
  return { type: CHANGE_TAB, view: selectedView }
}
