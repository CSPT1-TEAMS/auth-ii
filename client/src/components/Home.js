import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './home.css';

const Home = props => {
    const signOut = () => {
        localStorage.removeItem('token')
    }
    return (
        <div>
            <Container id = 'nav'>
                <Link to='/' className='link'>  Home  </Link>
                <Link to='/register' className='link'> Register </Link>
                <Link to='/login' className='link'>  Login </Link>
                <Link to='/users' className='link'> Users </Link>
                <Link to='/login' className='link' onClick={signOut}>Sign Out</Link>
            </Container>
        </div>
    )
}

export default Home;