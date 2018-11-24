import React from 'react'
import PostList from './list-posts'

export default class Posts extends React.Component{
  render(){
    return(
      <div>
        <h1>Posts - ASYNC REDUX</h1>
        <PostList></PostList>
      </div>
    )
  }
}