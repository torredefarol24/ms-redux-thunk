import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return { posts : state.posts.posts}
}

const connectedList = ({posts}) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
)
const PostList = connect(mapStateToProps)(connectedList)

export default PostList