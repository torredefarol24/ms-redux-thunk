import React from 'react'
import {connect} from 'react-redux'
import chocolateActions from '../../store-management/actions/chocolate-actions'

const mapDispatchToProps = (dispatch) => {
  return {
    createChocolate : (chocolate) => dispatch(chocolateActions.addChocolate(chocolate))
  }
}

class chocolateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chocolate : '',
      errorMessage : ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleFormSubmit(event){
    event.preventDefault()
    const {chocolate} = this.state
    if (chocolate.trim() === ''){
      this.setState({
        errorMessage : "Fill Values Properly"
      })
    } else {
      let newChocolate = {
        brand : chocolate
      }
      this.props.createChocolate(newChocolate);
      this.setState({
        chocolate: ""
      })
    }
    
  }

  handleTextChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render(){
    return(
      <div>
        <p><strong>{this.state.errorMessage}</strong></p>
        <form onSubmit={this.handleFormSubmit}>
          <div className="grid-x">
            <div className="medium-4 cell">
              <label> Chocolate Name
                <input type="text" placeholder="Wow" name="chocolate" onChange={this.handleTextChange} value={this.state.chocolate}/>
              </label>
            </div>
          </div>
          <button type='submit' className='button '>Submit</button>
        </form>
      </div>
    )
  }

}

const AddChocolate = connect(null, mapDispatchToProps)(chocolateForm);
export default AddChocolate