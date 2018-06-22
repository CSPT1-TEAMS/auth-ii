import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Link, NavLink
} from 'react-router-dom';

import CreateUser from './CreateUser';
import Login from './Login';
import Restricted from './Restricted';
import Home from './Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <div>
          <NavLink to='/'><button> Home </button></NavLink>
          <NavLink to='/CreateUser'><button> Create User </button></NavLink>
          <NavLink to='/Login'><button> Login </button></NavLink>
          <NavLink to='/Restricted'><button> Restricted </button></NavLink>
        </div>
        <div>
          <Route path='/Home' component={ Home }/>
          <Route path='/CreateUser' component={ CreateUser }/>
          <Route path='/Login' component={ Login }/>
          <Route path='/Restricted' component={ Restricted }/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
