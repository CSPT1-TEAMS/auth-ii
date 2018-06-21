import React, { Component } from 'react';
import axios from 'axios';
import './users.css';

class Users extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:5500/api/users', { headers: { 'Authorization': token } })
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <h5>Users</h5>
                <ul>
                    { this.state.users.map(users => {
                        return <li key={ users._id }>{ users.username }</li>
                    }) }
                </ul>
            </div>
        )
    }
}

export default Users;