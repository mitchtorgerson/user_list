import rest from '../../utils/rest';

const baseUrl = 'http://localhost:3001/';

export const Actions = {
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    SAVE_USER_SUCCESS: 'SAVE_USER_SUCCESS',
    UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS'
};

export function getUsers() {
    return dispatch => {
        const url = `${baseUrl}users`;

        return rest.get(url).then(response => {
            dispatch({type: Actions.GET_USERS_SUCCESS, users: response.data});
        })
    };
}

export function saveUser(user) {
    return dispatch => {
        const url = `${baseUrl}users`;

        return rest.post(url, user).then(response => {
            dispatch({type: Actions.SAVE_USER_SUCCESS, newUser: response.data});
        })
    };
}

export function updateUser(user) {
    return dispatch => {
        const url = `${baseUrl}users/${user.id}`;

        return rest.patch(url, user).then(response => {
            dispatch({type: Actions.SAVE_USER_SUCCESS, newUser: response.data});
        })
    };
}

export function deleteUser(id) {
    return dispatch => {
        const url = `${baseUrl}users/${id}`;

        return rest.delete(url).then(response => {
            dispatch({type: Actions.SAVE_USER_SUCCESS, newUser: response.data});
        })
    };
}
