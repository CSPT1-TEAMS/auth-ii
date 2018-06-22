import React from 'react';
import { Link } from 'react-router-dom'


const HomePage = (props) => {
    return (
        <div className="Navigation">
            <Link to='/'>
                <button className="button">Home</button>
            </Link>
            <Link to='/register'>
                <button className="button">Sign-Up</button>
            </Link>
            <Link to='/login'>
                <button className="button">Sing-In</button>
            </Link>
            <Link to='/users'>
                <button className="button">View Users</button>
            </Link>
        </div>
    );
}

export default HomePage;