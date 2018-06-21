import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './home.css';

const Home = props => {
    return (
        <div>
            <Container>
                <Link to='/'>  Home  </Link>
                <Link to='/register'> Register </Link>
                <Link to='/login'>  Login </Link>
                <Link to='/users'> Users </Link>
            </Container>
        </div>
    )
}

export default Home;