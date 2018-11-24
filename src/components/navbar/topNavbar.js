import React from 'react';
import {NavLink} from 'react-router-dom'

export default class TopNavBar extends React.Component{
  render(){
    return (
      <div>
        <ul className="menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/chocolates">Chocolates</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to='/posts'>Posts</NavLink>
        </ul>
      </div>
    )
  }
}
