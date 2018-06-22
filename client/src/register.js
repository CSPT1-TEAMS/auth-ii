import React, { Component } from 'react';
import axios from 'axios';
class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            race: ''
        }
    }

    submitInput = e => {
        e.preventDefault();
        axios.post('localhost:5500/api/auth/register', {username: this.state.username, password: this.state.password, race: this.state.race})
            .then(function(response) {
                console.log(response)
            })
            .catch()
        
        this.setState({
         
        })
      }

    handleChange = e => {
        e.preventDefault()
        this.setState({ [e.target.value]: e.target.value })
    }

    render() {
        return (
            <div>
                <form>

                    <input type="text" value={this.state.username} onChange={this.handleChange} placeholder="username" />
                    <input onChange={this.handleChange} value={this.state.password} placeholder="password" />
                    <input onChange={this.handleChange} value={this.state.race} placeholder="race" />
                </form>
            </div>
        )
    }
}

export default Register;