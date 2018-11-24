import React from 'react'
import UsersList from './list-users'
import AddUser from './add-users'

export default class Users extends React.Component{
  render(){
    return(
      <div>
        <h1> Users</h1>
        <AddUser></AddUser>
        <UsersList></UsersList>
      </div> 
    )
  }
}