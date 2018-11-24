import React from 'react';
import {connect} from 'react-redux';

import userActions from '../../store-management/actions/user-actions'

const mapDispatchToProps = (dispatch) => {
  return {
    createUser : (user) => dispatch(userActions.addUser(user))
  }
}

class userForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name : "",
      age : ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handlUserNameChange = this.handlUserNameChange.bind(this)
    this.handleUserAgeChange = this.handleUserAgeChange.bind(this)
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const {name, age} = this.state;
    const newUser = { name , age};
    this.props.createUser(newUser);
    this.setState({
      name : "",
      age : ""
    })
  }

  handlUserNameChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleUserAgeChange = (event) =>{
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
        <div className="grid-x">
          <div className="medium-4 cell">
            <label> Name
              <input type="text" placeholder="Wow" name="name" onChange={this.handlUserNameChange} value={this.state.name}/>
            </label>
          </div>
          <div className="medium-4 cell">
            <label> Age
              <input type="number" placeholder="6" name="age" onChange={this.handleUserAgeChange} value={this.state.age}/>
            </label>
          </div>
        </div>
        <button type='submit' className='button '>Submit</button>
      </form>
    )
  }
}

const AddUser = connect(null, mapDispatchToProps)(userForm);
export default AddUser