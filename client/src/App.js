import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Route,Switch } from 'react-router-dom';
import './App.css';
import Home from './home.js';
import Login from './login.js';
import Register from './register.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      user:'',
      loggedIn: false
    }
  }
  componentDidMount(){
    //check if user is in local storage and set to state
    localStorage.getItem('user')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Authentication using JWTs</h1>
        </header>
        <Link to='/'  > Home </Link>
        <Link to='/login'  > Login </Link>
        <Link to='/register' > Register </Link>
        <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
