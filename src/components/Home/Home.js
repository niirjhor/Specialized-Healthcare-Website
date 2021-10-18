import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';

const Home = () => {
    return (
        <div>
            <Container fluid className='bg-dark'>
                <Banner></Banner>
                <h2 className='bg-dark text-white mt-2'>Search the Best Doctors</h2>
                <input className='mb-2' type="search" name="" id="" />
                <Experts></Experts>
            </Container>
        </div>
    );
};

export default Home;