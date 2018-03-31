import axios from 'axios';
import processLogin from '../utils/processLogin';
import apiUrl from "../config"
import {
  GET_ALL_USERS,
  ADD_NEW_USER,
  ADD_SINGLE_USER,
  ADD_ERROR,
  REMOVE_ERROR,
  GET_USER_DETAILS,
  GET_ADMIN
} from '../constants/actionType';

const addUsersToState = users => ({
  type: GET_ALL_USERS,
  users
});

const addNewUserToState = user => ({
  type: ADD_NEW_USER,
  user
});

// const registerUserAction = user => ({
//   type:
// });

const addSingleUserToState = user => ({
  type: GET_USER_DETAILS,
  user
});

const addErrorToState = error => ({
  type: ADD_ERROR,
  error
});

const removeErrors = () => ({
  type: REMOVE_ERROR
});

const getAdminAction = data => ({
  type: GET_ADMIN,
  data
});

const initialState = {
  user: {
    contracts: []
  },
  contractSum: 0,
  earningsTotal: 0
};

/**
 * Get all users
 * @function getAllUser
 * @export
 * @returns {void}
 */
export function getAllUsers() {
  return dispatch =>
    axios.get(`${apiUrl}/api/admin/user`).then(
      ({ data }) => {
        dispatch(addUsersToState(data.users));
      },
      ({ response }) => {
        console.log(response);
      }
    );
}

export function registerUser(user) {
  return dispatch =>
    axios.post(`${apiUrl}/api/users/`, user)
      .then(({ data }) => {
        console.log(data);
        processLogin(data.token, dispatch);
        return true;
      }, () => false);
}

/**
 * Get all users
 * @function addNewUser
 * @param {object} userData
 * @export
 * @returns {void}
 */
export function addNewUser(userData) {
  return dispatch =>
    axios.post(`${apiUrl}/api/v1/users`, userData).then(
      () => {
        dispatch(getAllUsers());
        return true;
      },
      ({ response }) => {
        console.log(response);
        return false;
      }
    );
}

/**
 * Get all users
 * @function addNewUser
 * @param {int} id
 * @export
 * @returns {void}
 */
export function getSingleUser() {
  return dispatch =>
    axios.get(`${apiUrl}/api/users/dashboard`).then(
      ({ data }) => {
        dispatch(addSingleUserToState(data));
        return true;
      },
      ({ response }) => {
        dispatch(addSingleUserToState(initialState));
        return false;
      }
    );
}

export function getAdmin() {
  return dispatch =>
    axios.get(`${apiUrl}/api/admin`).then(
      ({ data }) => {
        dispatch(getAdminAction(data));
      },
      ({ response }) => {
        console.log(response);
      }
    );
}

export function creditUser(data) {
  return dispatch =>
    axios.post(`${apiUrl}/api/finance/earnings`, data).then(
      () => true,
      ({ response }) => {
        console.log(response);
        return false;
      }
    );
}

export function addSite(data) {
  return dispatch =>
    axios.post(`${apiUrl}/api/users/site`, data).then(
      () => true,
      ({ response }) => {
        console.log(response);
        return false;
      }
    );
}

export function deleteStore() {
  return dispatch => dispatch(addSingleUserToState({}));
}

/**
 * Deletes a user
 * @export
 * @param {any} id
 * @return {void}
 */
export function deleteUser(id) {
  return dispatch =>
    axios
      .delete(`${apiUrl}/api/v1/users/${id}`)
      .then(() => dispatch(getAllUsers()), ({ response }) => true);
}

/**
 * Removes errors from state
 * @export
 * @returns {void}
 */
export function deleteError() {
  return dispatch => dispatch(removeErrors());
}

export const editUser = (uuid, userData) => dispatch =>
  axios.put(`${apiUrl}/api/users/${uuid}`, userData).then((response) => {
    processLogin(response.data.token, dispatch);
    return true;
  }, () => false);
