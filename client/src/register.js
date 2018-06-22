import React, { Component } from 'react';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            password:'',
            race:''
        }
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({[e.target.value]:e.target.value})
    }

    render() {
        return(
            <div>
                <form>

            <input type = "text" value = {this.state.username} onChange = {this.handleChange}  placeholder = "username"/> 
            <input onChange = {this.handleChange} value = {this.state.password} placeholder = "password"/> 
            <input onChange = {this.handleChange} value = {this.state.race} placeholder = "race"/>
               </form>
            </div>
        )
    }
}

export default Register;