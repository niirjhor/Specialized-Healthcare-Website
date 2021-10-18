import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Doctor.css'

const Doctor = (props) => {

    const { id, Name, Age, specilty, img } = props.doctor
    return (
        <div>

            <Col>
                <Card className='card'>
                    <Card.Img variant="top" className='doctor-img' src={img} />
                    <Card.Body>
                        <Card.Title>Doctor Name:{Name}</Card.Title>
                        <p>Age:{Age} Years</p>
                        <p className='text-info fw-bold'>Speciality:{specilty}</p>
                    </Card.Body>
                    <Button>Click for Appoinment</Button>
                </Card>

            </Col>

        </div>
    );
};

export default Doctor;