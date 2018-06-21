import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Home} />
        <Route path='/register' component={Register}/>
      </div>
    );
  }
}

export default App;
