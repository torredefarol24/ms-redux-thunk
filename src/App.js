import React  from 'react';
import TopNavBar from './components/navbar/topNavbar';
import {BrowserRouter} from 'react-router-dom'
import RouteSetup from './routes/routes';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopNavBar></TopNavBar>
          <RouteSetup></RouteSetup>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
