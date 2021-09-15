import api from '../../services/api';

import { loadUsers } from '../user/reducer'

export const getAllUsers = () => {
    return dispatch => {
        api.get('/')
        .then((res) => dispatch(loadUsers(res.data.results)))
        .catch(console.log)
    }
}

export const getPagination = () => {
    return dispatch => {
        api.get('/')
        .then((res) => dispatch(loadUsers(res.data.info)))
        .catch(console.log)
    }
}