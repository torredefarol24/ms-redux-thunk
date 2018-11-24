import userActionTypes from '../actionTypes/user-action-types';

const addNewUser = (user) => {
  return {
    type : userActionTypes.ADD_USER,
    payload : user
  }
}

const userActions = {
  addUser : addNewUser
}

export default userActions