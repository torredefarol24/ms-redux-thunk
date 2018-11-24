import React  from 'react';
import {Route} from 'react-router-dom'
import Chocolates from '../components/chocolates/chocolates'
import Info from '../components/info/info'
import Users from '../components/users/users';
import Posts from '../components/posts/posts';

const RouteSetup = () => (
  <div>
    <Route exact path="/" component={Info} />
    <Route exact path='/chocolates' component={Chocolates} />
    <Route exact path='/users' component={Users} />
    <Route exact path='/posts' component={Posts} />
  </div>
)


export default RouteSetup