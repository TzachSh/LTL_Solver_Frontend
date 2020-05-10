import { FETCHING, COMPLETE_FETCH, RESET_EXPERIMENTS, STOP_FETCH } from '../actions/experimentsViewActions';

const initialState = { data: [], isLoading: false };

export default function experimentsViewReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                isLoading: true
            };
        case COMPLETE_FETCH:
            return {
                ...state,
                data: action.data,
                isLoading: false
            };
        case RESET_EXPERIMENTS:
            return {
                ...state,
                data: [],
                isLoading: false
            };
        case STOP_FETCH:
            return {
                ...state,
                data: [],
                isLoading: false
            };
        default:
            return state;
    }
}