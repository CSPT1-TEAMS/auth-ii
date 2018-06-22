import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

class Users extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    axios.get('http://localhost:5500/api/users', {headers: {'Authorization': token}})
      .then( response => {
        this.setState({users: response.data})
      })
      .catch( err => console.log(err))
  }

  render() {
    return (
      <div>
        <div>
          Users
        </div>
        <ul>
          {this.state.users.map(user => {
            return <li key={user._id}>{user.username}</li>
          })}
        </ul>
      </div>

    )
  }
}

export default Users;
