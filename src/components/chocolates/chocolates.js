import React from 'react';
import ListChocolates from './list-chocolates';
import AddChocolate from './add-chocolates';

export default class Chocolates extends React.Component{
  render(){
    return(
      <div>
        <h1>Chocolates</h1>
        <AddChocolate></AddChocolate>
        <ListChocolates></ListChocolates>
      </div>
    )
  }
}
