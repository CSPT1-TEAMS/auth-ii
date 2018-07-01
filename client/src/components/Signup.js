import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            race: ""
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const user = this.state
        axios.post("http://localhost:5500/api/auth/register", user)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                this.props.history.push('/users')
            })
            .catch(error => {
                console.log(error)
            })
        this.setState({username: "", password: "", race: ""})
    }

    render() {
        return (
            <div>
                <h2>Register User</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text" name="username" value={this.state.username}
                            onChange={this.handleChange} />
                    </label>
                    <label>Password:
                    <input type="password" name="password" value={this.state.password}
                        onChange={this.handleChange} />
                    </label>
                    <label>Race:
                    <input type="text" name="race" value={this.state.race}
                        onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Create User" />
                </form>
            </div>
        )
    }
}

export default withRouter(Signup)