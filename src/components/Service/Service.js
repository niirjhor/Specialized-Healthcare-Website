import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { id, Name, Rate, Result, img } = props.service;

    return (
        <div>
            <Col className='container'>
                <Card className='card'>
                    <Card.Img variant="top" className='doctor-img' src={img} />
                    <Card.Body>
                        <Card.Title>Test Name:{Name}</Card.Title>
                        <p className='text-info fw-bold'>Rate:{Rate} Taka</p>
                        <p>Result in:{Result} days</p>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;