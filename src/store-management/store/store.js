import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer';
import PostActions from '../actions/post-actions'

const globalState = {}
const middlewares = applyMiddleware(thunk, logger)

const store = createStore(rootReducer, globalState, middlewares)

store.subscribe( () => {
  console.log("New State ", store.getState())
})

console.log("in main state", store.getState())

export default store