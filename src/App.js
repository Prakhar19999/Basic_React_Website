import React, { Component } from 'react';
import './App.css'
import Navbar from './COMPONENTS/Navbar/navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './COMPONENTS/PAGES/Home/home';


class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;