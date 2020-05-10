import { RECEIVE_NOTIFICATION, CLOSE_NOTIFICATION } from "../actions/notificationActions";

const initialState = { isShown: false, message: {text: undefined, severity: undefined} }

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_NOTIFICATION:
            return {
                ...state,
                isShown: true,
                message: action.message
            };
        case CLOSE_NOTIFICATION:
            return {
                ...state,
                isShown: false,
                message: undefined
            };
        default:
            return state;
    }
}