import React, { Component } from 'react';

class Register extends Component {
    constructor(){
        super();
        this.state = {

        }
    }



    render() {
        return(
            <div>
                <form>
            <input placeholder = "username"/> 
            <input placeholder = "password"/> 
            <input placeholder = "race"/>
               </form>
            </div>
        )
    }
}

export default Register;