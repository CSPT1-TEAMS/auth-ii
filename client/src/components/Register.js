import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from "reactstrap";
import axios from 'axios'

import "./register.css";

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
        axios.put('http://localhost:5500/api/register', this.state)
            .then(user => {
                console.log(user)
            })
    }

    render() {
        return (
            <Container>
                <Form inline>
                    <Row className = 'row'>
                        <Col>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="username" name="username" id="exampleEmail" placeholder="unique username" />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password" />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <FormGroup>
                            <Label for="examplePassword">Race</Label>
                            <Input type="string" name="race" id="race" placeholder="race" />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Button>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );

    }
}
export default Register;
