import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from './homePage';
import Register from './signUp';
import Login from './signIn';
import Users from './usersInfo'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Authentication using JWTs</h1>
        </header>
        <Route path='/' component={HomePage}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route path='/users' component={Users}/>
      </div>
    );
  }
}

export default App;
