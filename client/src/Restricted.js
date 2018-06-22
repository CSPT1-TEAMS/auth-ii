import React, {Component} from 'react';
import axios from 'axios'

class Restricted extends Component {
    render() {
        return (
            <div>
            {console.log(axios.get('http://localhost:5500/api/auth/token'))}
            <h1>Restricted</h1>
            </div>
        )
    }
}

export default Restricted