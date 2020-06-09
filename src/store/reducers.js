import { combineReducers } from 'redux';

import users from './Users/Reducer';

const rootReducer = combineReducers({
    users,
});

export default rootReducer;
