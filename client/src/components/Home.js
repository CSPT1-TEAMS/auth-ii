import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let style = {
            marginTop: 20 + 'px',
            padding: 20 + 'px',
            backgroundColor: 'blue',
            textDecoration: 'None',
            color: 'white'
        }
        return (
            <nav>
                <Link to="/" style={style}>Home</Link>
                <Link to="/Signup" style={style}>SignUp</Link>
                <Link to="/Signin" style={style}>SignIn</Link>
                <Link to="/Users" style={style}>Users</Link>
            </nav>
        )
    }
}

export default withRouter(Home)