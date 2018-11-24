import ChocolateActionTypes from '../actionTypes/chocolate-action-types';
const initialStore = {
  chocolates : [
    {
      id : 1,
      brand : "Mars", 
    },
    {
      id : 2,
      brand : "Snickers",
    },
    {
      id : 3,
      brand : "KitKat"
    }
  ]
}

const chocolateReducer = (state = initialStore, action) =>{
  switch (action.type){
    case ChocolateActionTypes.ADD_CHOCOLATE:
      return {...state, chocolates : [...state.chocolates, action.payload]}
    default:
      return state
  }
}

export default chocolateReducer