import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        axios.get('http://localhost:5500/api/users', {headers: { Authorization: token } })
            .then(res => {
                this.setState({users: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <div>User(s) Information</div>
                <ul>
                    {this.state.users.map( u => {
                        return (
                            <li key={u._id}>
                                <div>Username: {u.username}</div>
                                <div>Race: {u.race}</div>
                            </li>
                        ); 
                    })}
                </ul>
            </div>
        );
    }
}

export default Users;
