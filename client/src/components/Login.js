import React, { Component } from "react";
import { Button, Form, Input, Container } from "reactstrap";
import axios from 'axios';
import './login.css';


class Login extends Component {
    state = {
        username: "",
        password: "",
    };

    inputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5500/api/auth/login', this.state)
            .then(user => {
                localStorage.setItem('token', user.data.token)
                this.props.history.push('/users')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <Container>
                <h5>Login</h5>
                <Form inline onSubmit={ this.submitHandler }>

                    <Input className='input' type="username" name="username" id="exampleEmail" placeholder="username" onChange={ this.inputChange } />

                    <Input className='input' type="password" name="password" id="examplePassword" placeholder="password" onChange={ this.inputChange } />

                    <Button>Submit</Button>

                </Form>
            </Container>
        );

    }
}
export default Login;
