import postActionTypes from '../actionTypes/post-action-types';
import PostApiCalls from '../api-calls/post';

const addNewUser = (post) => {
  return {
    type : postActionTypes.ADD_POST,
    payload : post
  }
}

const loadPosts = (postsFromAPI) => {
  return {
    type : postActionTypes.LOAD_POSTS,
    payload : postsFromAPI
  }
}

const callPostsApi = () => {
  return (dispatch) => {
    return PostApiCalls.getAllPosts()
      .then( posts => dispatch(loadPosts(posts)) )
      .catch(err => console.error("stupid post ", err))
  }
}

const postActions = {
  addUser : addNewUser,
  getAllPosts : () => callPostsApi(),
}



export default postActions