import React, { Component } from "react";
import axios from 'axios';
import { Button, Form, Input, Container } from "reactstrap";
import "./register.css";

const jwt = require('jsonwebtoken');
const SECRET = 'SECRET COOKIE MONSTER'


const makeToken = (user) => {
    const payload = {
        sub: user._id,
        name: user.username,
        race: user.race
    }
    const options = {
        expiresIn: '24h'
    }
    return jwt.sign(payload, SECRET, options)
}


class Register extends Component {
    state = {
        username: "",
        password: "",
        race: ""
    };

    inputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5500/api/auth/register', this.state)
            .then(user => {
                const token = makeToken(user);
                console.log('TOKEN', token);
                localStorage.setItem('token', token)
                this.props.history.push('/users')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <Container>
                <div>
                    <h5>Create an Account</h5>
                        <Form onSubmit={ this.submitHandler }>
                            <Input className='input' type="username" name="username" id="exampleUsername" placeholder="username" onChange={ this.inputChange } />
                            <Input className='input' type="password" name="password" id="examplePassword" placeholder="password" onChange={ this.inputChange } />
                            <Input className='input' type='string' name='race' id='exampleRace' placeholder='race' onChange={ this.inputChange } />

                            <Button className='input' type='submit'>Submit</Button>
                        </Form>
                </div>
            </Container>
        );

    }
}
export default Register;
