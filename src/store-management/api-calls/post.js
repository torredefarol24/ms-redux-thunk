const getPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then( res => { return res.json() }) 
}

const PostApiCalls = {
  getAllPosts : getPosts,
}

export default PostApiCalls