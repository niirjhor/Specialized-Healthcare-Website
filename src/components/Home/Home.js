import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 carousal">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlhZ25vc3RpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Cost Effective Best Diagonistic Center</h3>
                                <p>We Provide the best cost effective solution to all the patients</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1578496481449-cf2e845cc00c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGlhZ25vc3RpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Trustworthy and Faithful</h3>
                                <p>You can always get the most trustworthy results than anywhere</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1578496480240-32d3e0c04525?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlhZ25vc3RpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Results in Quick Time </h3>
                                <p>We provide all the tests that doctors suggest with the shortest time result</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Home;