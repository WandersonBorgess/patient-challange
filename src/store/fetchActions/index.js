import api from '../../services/api';
import { loadUsers, loadUser } from '../user/reducer';

export const getAllUsers = () => {
  return (dispatch) => {
    api
      .get(`/?results=${50}`)
      .then((res) => {
        dispatch(loadUsers(res.data.results))
      })
      .catch(console.log)
  }
}

export const getUser = (userId) => {
  return (dispatch) => {
    api
      .get(`/?results=1&page=1&id=${userId}`)
      .then((res) => {
        dispatch(loadUser(res.data.results))
      })
      .catch(console.log)
  }
}