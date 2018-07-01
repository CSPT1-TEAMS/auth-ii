import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        console.log(token)
        const headers = {
            headers: {
                "authorization" : localStorage.getItem('token')
            }
        }
        axios.get("http://localhost:5500/api/users", headers)
            .then(response => {
                this.setState({users: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <Fragment>
                <h3>List Of Users:</h3>
                <ul>
                    {this.state.users.map((user, i) => {
                        return <li key={i}>{ user.username }</li>
                    })}
                </ul>
            </Fragment>
        )
    }
}

export default withRouter(Users);