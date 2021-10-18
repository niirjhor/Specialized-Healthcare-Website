import React from 'react';
import { Card, Col } from 'react-bootstrap';
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
                        <h3>Age:{Age} Years</h3>
                        <h4>Speciality:{specilty}</h4>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Doctor;