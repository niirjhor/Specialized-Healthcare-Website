import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Ambulance.css'

const Ambulance = (props) => {
    const { id, Name, img, Rate } = props.ambulance;

    return (
        <div>
            <div className="container">
                <Col>
                    <Card className='card'>
                        <Card.Img variant="top" className='amb-img' src={img} />
                        <Card.Body>
                            <Card.Title className='fw-bold'>Quality:{Name}</Card.Title>
                            <p className='fw-bold'>Rate: {Rate}Taka</p>
                        </Card.Body>
                        <Link to={`/booking/${id}`}>
                            <Button className='text-dark bg-warning'>Book Ambulance</Button>
                        </Link>
                    </Card>

                </Col>
            </div>
        </div >
    );
};

export default Ambulance;