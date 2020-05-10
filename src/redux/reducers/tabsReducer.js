import { View, CHANGE_TAB } from '../actions/tabsActions';

const initialState = { view: View.MAIN };

export default function tabsReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                ...state,
                view: action.view
            };
        default:
            return state;
    }
}