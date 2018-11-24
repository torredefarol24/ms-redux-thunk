import {combineReducers} from 'redux';
import chocolateReducer from './chocolateReducer';
import userReducer from './userReducer';
import postReducer from './postReducer'


const allReducers = {
  chocolates : chocolateReducer ,
  users : userReducer,
  posts : postReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer