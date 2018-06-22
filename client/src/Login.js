import React, {Component} from 'react';
import axios from 'axios';
import { Button, Form, Label, Input } from 'reactstrap';


class Login extends Component {
    constructor() {
        super()
        this.state={
            username: '',
            password:'',
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        const user = this.state
        event.preventDefault()
        axios.post('http://localhost:5500/api/auth/login', user)
        .then((user) => {
           user.headers.authorization = user.data.token
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
        <div>
            <Form>
                <Input type='text' name='username' value={this.state.username} onChange={this.handleChange} placeholder='username'/>
                <Input type='text' name='password' value={this.state.password} onChange={this.handleChange} placeholder='password'/>
                <Button color='info' onClick={ this.handleSubmit }>Login</Button>
            </Form>
        </div>
        )
    }
}

export default Login