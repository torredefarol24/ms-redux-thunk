import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store-management/store/store'
import PostActions from './store-management/actions/post-actions'


class RootComponent extends React.Component{
  componentWillMount(){
    store.dispatch(PostActions.getAllPosts())
  }

  render(){
    return(
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}


ReactDOM.render(<RootComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
