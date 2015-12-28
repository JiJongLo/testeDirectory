/**
 * Created by User on 28.12.2015.
 */
import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch'
export function fetchUsers(url) {
    return (dispatch, getState) => {
        dispatch(requestUsers(url));
        return fetch(url)
            .then(response => response.json())
            .then(json => {
                dispatch(receiveUsers(json));
            })
            .catch(error => {throw error});
    };
}
export function receiveUsers(users) {
    return {
        type: types.RECEIVE_USERS,
        users
    };
}

function requestUsers(url) {
    return {
        type: types.REQUEST_USERS,
        url: url
    };
}
