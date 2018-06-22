import React, {Component} from 'react';
import axios from 'axios';
import { Button, Form, Label, Input } from 'reactstrap';


class CreateUser extends Component {
    constructor() {
        super()
        this.state={
            username: '',
            password:'',
            race:''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        const user = this.state
        console.log(user)
        event.preventDefault()
        axios.post('http://localhost:5500/api/auth/register', user)
        .then((user) => {
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
        <div>
            {console.log(this.state)}
            <Form>
                <Input type='text' name='username' value={this.state.username} onChange={this.handleChange} placeholder='username'/>
                <Input type='text' name='password' value={this.state.password} onChange={this.handleChange} placeholder='password'/>
                <Input type='text' name='race' value={this.state.race} onChange={this.handleChange} placeholder='race'/>
                <Button color='info' onClick={ this.handleSubmit }>Create User</Button>
            </Form>
        </div>
        )
    }
}

export default CreateUser