import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  inputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    const { username, password } = this.state;
    console.log(username, password)
    e.preventDefault()
    axios.post('http://localhost:5500/api/auth/login', { username, password })
      .then(response => {
        localStorage.setItem('token', response.data.token)
        console.log(localStorage.setItem('token', response.data.token))
        this.props.history.push('/')
      })
      .catch( err => console.log(err))
  }
  render() {
    return (
      <div className="Login">
        <div>
          LOGIN
        </div>
        <form onSubmit={this.submitHandler}>
          <input name="username" placeholder="Username" value={this.state.username} onChange={this.inputChange}/>
          <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.inputChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;
