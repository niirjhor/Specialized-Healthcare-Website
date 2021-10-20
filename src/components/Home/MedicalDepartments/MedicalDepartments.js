import React from 'react';
import { Col, ListGroup, ProgressBar, Row } from 'react-bootstrap';

const MedicalDepartments = () => {
    return (
        <div className='container'>
            <Row className='my-4 justify-content-between'>
                <Col xs={5}>
                    <h3 className='text-warning fw-bold'>Services We offer</h3>
                    <p className='text-muted'>We provide many services for the patients.
                        <br />
                        Some of the offers are listed below
                    </p>
                    <ListGroup>
                        <ListGroup.Item action variant="primary">Eye Care Solutions</ListGroup.Item>
                        <ListGroup.Item action variant="secondary">Dental Surgery</ListGroup.Item>
                        <ListGroup.Item action variant="success">Blood Tests And X-Rays</ListGroup.Item>
                        <ListGroup.Item action variant="danger">Health Care Problems</ListGroup.Item>
                        <ListGroup.Item action variant="warning">Medicies And Drug Store</ListGroup.Item>
                        <ListGroup.Item action variant="info">General Prescriptions</ListGroup.Item>

                    </ListGroup>

                </Col>



                <Col className='ps-5' xs={5}>
                    <h3 className='text-warning fw-bold'>Progress of us between years</h3>
                    <p className='text-muted'>Over the years number of patients has increased a lot
                        <br />
                        Progression is shown below
                    </p>
                    2015
                    <ProgressBar animated variant="success" now={45} />
                    <br />
                    2016
                    <ProgressBar animated variant="success" now={68} />
                    <br />
                    2017
                    <ProgressBar animated variant="success" now={75} />
                    <br />
                    2018
                    <ProgressBar animated variant="success" now={85} />
                    <br />

                </Col>
            </Row>
        </div>
    );
};

export default MedicalDepartments;