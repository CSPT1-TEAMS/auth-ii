import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/users" component={Users} />
      </Fragment>
    );
  }
}

export default App;
