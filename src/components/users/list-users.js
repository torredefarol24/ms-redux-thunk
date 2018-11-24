import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { users : state.users.users}
}

const connectedUsers = ({users}) => (
  <ul>
    { users.map(user => 
      <li key={user.id}>{user.name} ({user.age} Yrs)</li>
    )}
  </ul>
)

const UserList = connect(mapStateToProps)(connectedUsers);

export default UserList