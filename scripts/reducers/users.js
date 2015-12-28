import * as types from '../constants/ActionTypes';
export default function modal(state = null, action) {
    switch(action.type) {
        case types.RECEIVE_USERS:
            return  Object.assign({}, action.users);
        case types.REQUEST_USERS:
            return state;
        default:
            return state;
    }
}
