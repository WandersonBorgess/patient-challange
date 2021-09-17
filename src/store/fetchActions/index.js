import api from '../../services/api';
import { Users, User } from '../users';

export const getAllUsers = () => {
  return dispatch => {
    api.get('?results=50')
      .then(res => {
        dispatch(Users(res.data.results))
      })
      .catch((error) => "error get users" + error)
  }
}

export const getUserFetch = (id) => {
  return dispatch => {
    api
    .get(`/?results=1&page=1&id=${id}`) 
    .then(res => dispatch(User(res.data.results)))
    .catch((error) => "error get user" + error)
  }
}