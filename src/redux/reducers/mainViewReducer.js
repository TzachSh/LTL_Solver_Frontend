import { LOAD_COMPLETE, RECEIVE_MESSAGE, SEND_MESSAGE, FETCH_ALL_MESSAGES, RESET, START_CALCULATE } from '../actions/mainViewActions';

const initialState = {  isCalculating: false, isLoaded: false, formulas: [], messages: [], newMessage: null, socket: new WebSocket("ws://192.168.1.15:18080/ws") };

export default function mainViewReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_COMPLETE:
            return {
                ...state,
                formulas: action.formulas,
                isLoaded: true,
                isCalculating: false,
            };
        case RECEIVE_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message]
            };
        case SEND_MESSAGE:
            return {
                ...state,
                newMessage: action.message,
            };
        case FETCH_ALL_MESSAGES:
            return state;
        case RESET:
            return {
                ...state,
                formulas: [],
                messages: [],
                isLoaded: false,
                isCalculating: false
            };
            case START_CALCULATE:
                return {
                    ...state,
                    isCalculating: true
                };
        default:
            return state;
    }
}