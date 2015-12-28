/**
 * Created by User on 25.12.2015.
 */
import {combineReducers} from 'redux';
import users from '../reducers/users';
const rootReducer = combineReducers({
    users
});

export default rootReducer;
