import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Experts></Experts>
        </div>
    );
};

export default Home;