import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom'; 
import Login from './Login';
import Users from './Users';
import Register from './Register';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p><Link to='/login'>Login</Link></p>
        <p><Link to='/register'>Register</Link></p>
        <p><Link to='/users'>Users</Link></p>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/users' component={Users} />
      </div>
    );
  }
}

export default App;
