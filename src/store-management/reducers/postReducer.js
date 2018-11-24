import postActionTypes from '../actionTypes/post-action-types';

let initialState = {
  posts : []
}

const postReducer = (state=initialState, action) =>{
  switch (action.type){
    case postActionTypes.LOAD_POSTS:
      return {
        ...state,
        posts :  action.payload
      }
    case postActionTypes.ADD_POST:
      return { 
        ...state, 
        posts : [...state.posts, action.payload]
      }
    default : 
      return state
  }
}

export default postReducer