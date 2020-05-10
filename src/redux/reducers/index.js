import { combineReducers } from 'redux';
import tabsReducer from './tabsReducer';
import mainViewReducer from './mainViewReducer';
import experimentsViewReducer from './experimentsViewReducer';
import notificationReducer from './notificationReducer';

export default combineReducers({
    tabs: tabsReducer,
    mainView: mainViewReducer,
    experimentsView: experimentsViewReducer,
    notifications: notificationReducer
})
