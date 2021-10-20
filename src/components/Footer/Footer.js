
import React from 'react';
import { Col, Container, ModalFooter, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <ModalFooter className="font-small text-dark justify-content-center mt-5">
            <Container className="">
                <Row>
                    <Col>
                        <h5 className="title">About Us</h5>
                        <li className="list-unstyled lists">
                            <a targer='_blank' href="https://freefrontend.com/css-headers-footers/">Our History</a>
                        </li>
                        <li className="list-unstyled pt-3">
                            <a href="https://freefrontend.com/css-headers-footers/">Leadership Team</a>
                        </li>
                        <li className="list-unstyled pt-3">
                            <a href="https://freefrontend.com/css-headers-footers/">Hospital Info</a>
                        </li>

                    </Col>
                    <Col md="3">
                        <h5 className="title">Careers</h5>
                        <li className="list-unstyled">
                            <a href="https://freefrontend.com/css-headers-footers/">Education Opportunities</a>
                        </li>
                        <li className="list-unstyled pt-3">
                            <a href="https://freefrontend.com/css-headers-footers/">Employee Opportunities</a>
                        </li>
                        <li className="list-unstyled pt-3">
                            <a href="https://freefrontend.com/css-headers-footers/">Working with us</a>
                        </li>

                    </Col>
                    <Col md="3">
                        <h5 className="title">Contact Us</h5>
                        <li className="list-unstyled">
                            <a href="https://freefrontend.com/css-headers-footers/">Donations</a>
                        </li>
                        <li className="list-unstyled pt-3">
                            <a href="https://freefrontend.com/css-headers-footers/">Employment</a>
                        </li>
                        <li className="list-unstyled pt-3">
                            <a href="https://freefrontend.com/css-headers-footers/">Frequent Questions</a>
                        </li>

                    </Col>
                    <Col>
                        <h5 className="title">Extra</h5>
                        <li className="list-unstyled">
                            <a href="https://freefrontend.com/css-headers-footers/">Trending Now</a>
                        </li>
                        <li className="list-unstyled pt-3">
                            <a href="https://freefrontend.com/css-headers-footers/">Mobile Registration</a>
                        </li>
                        <li className="list-unstyled pt-3">
                            <a href="https://freefrontend.com/css-headers-footers/">Be a Leader</a>
                        </li>

                    </Col>
                </Row>
            </Container>
            <p className='text-footer justify-content-center'>© Copyright Specialist Diagonistic Center 2021 | All Rights Reserved | Privacy Policy</p>
        </ModalFooter>
    );
};

export default Footer;