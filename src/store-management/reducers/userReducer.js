import userActionTypes from '../actionTypes/user-action-types'
const initialState = {
  users : [
    {
      name : "Harry",
      age : 15
    },
    {
      name : "Mary",
      age : 8
    },
    {
      name : "Larry",
      age : 12
    }
  ]
}

const userReducer = (state = initialState, action) =>{
  switch (action.type){
    case userActionTypes.ADD_USER:
      return { ...state, users : [...state.users, action.payload]}
    default:
      return state
  }
}

export default userReducer