import React, { Component } from 'react';
import Navbar from './COMPONENTS/Navbar/navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;