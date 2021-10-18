import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-12 col-sm-1'>


                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlhZ25vc3RpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Minimum Cost</h3>
                                <p>We Provide the best tests with the most affordable price</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Short Time Result</h3>
                                <p>We Provide the Test Results in the shortest possible time</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1578496480240-32d3e0c04525?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlhZ25vc3RpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Best Experts</h3>
                                <p>Best Doctors are availabe 24/7</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>

    );
};

export default Banner;