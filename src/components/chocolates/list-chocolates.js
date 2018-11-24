import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return { chocolates : state.chocolates.chocolates}
}

const connectedList = ({chocolates}) => (
  <ul>
    {chocolates.map(chocolate => (
      <li key={chocolate.id}>{chocolate.brand}</li>
    ))}
  </ul>
)

const ListChocolates = connect(mapStateToProps)(connectedList)

export default ListChocolates