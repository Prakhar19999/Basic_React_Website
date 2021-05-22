import React from 'react';
import Navbar from './COMPONENTS/Navbar/navbar';
import './App.css';
import Home from './COMPONENTS/PAGES/Home/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './COMPONENTS/PAGES/Services';
import Products from './COMPONENTS/PAGES/Products';
import SignUp from './COMPONENTS/PAGES/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
