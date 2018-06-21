import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    inputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    submitHandler = (e) => {
        const { username, password } = this.state;
        e.preventDefault();
        axios.post('http://localhost:5500/api/auth/login', { username, password })
            .then(user => {
                console.log(user);
                localStorage.setItem('token', user.data.token)
                this.props.history.push('/users')
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    render() {
        return (
            <div>
                <div>Sign-In!</div>
                <form onSubmit={this.submitHandler}>
                    <input
                        name='username'
                        placeholder="Enter a Username"
                        value={this.state.username}
                        onChange={this.inputChange}/>
                    <input
                        name='password'
                        placeholder="Enter a Password"
                        value={this.state.password}
                        onChange={this.inputChange}/>
                    <button type='submit'>Log-In!</button>
                </form>
            </div>
        );
    }
}

export default Login;