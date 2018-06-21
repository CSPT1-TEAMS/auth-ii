import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    // create a state to hold the form data

    state = {
        username: '',
        password: '',
        race: ''
    }
    
    // handles the change of state per letter typed

    inputChange = (e) => {
        // set state here

        this.setState({ [e.target.name]: e.target.value })
    }

    // form submit to state

    submitHandler = (e) => {
        e.preventDefault();
        //axios post to register on server.js
        
        axios.post('http://localhost:5500/api/auth/register', this.state)
            .then(user => {
                console.log(user)
                localStorage.setItem('token', user.data.token)
                this.props.history.push('/users')
            })
            .catch(err => {
                console.log(err)
            })
    }

    // render

    render() {
        return(
            <div>
                <div>Sign-Up!</div>
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
                    <input
                        name='race'
                        placeholder="What is your Race?"
                        value={this.state.race}
                        onChange={this.inputChange}/>
                    <button type='submit'>Register!</button>
                </form>
            </div>
        );
    }
}

export default Register;