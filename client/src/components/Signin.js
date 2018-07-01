import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const user = this.state
        axios.put("http://localhost:5500/api/auth/login", user)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                this.props.history.push("/users")
            })
            .catch(error => {
                console.log(error)
            })
        this.setState({username: "", password: ""})
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
                    <input type="submit" value="LogIn" />
                </form>
            </div>
        )
    }
}

export default withRouter(Signin)