import chocolateActionTypes from '../actionTypes/chocolate-action-types';

const addNewChocolate = (chocolate) => {
  return {
    type : chocolateActionTypes.ADD_CHOCOLATE,
    payload : chocolate
  }
}

const chocolateActions = {
  addChocolate : addNewChocolate
}

export default chocolateActions