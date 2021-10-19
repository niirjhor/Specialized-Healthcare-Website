import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';



const Appoinment = () => {
    const { appointmentId } = useParams()
    const [appointments, setAppointments] = useState([]);
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch('/doctorsDetails.json')
            .then(res => res.json())
            .then(data => setAppointments(data.appoinment))
    }, []);

    useEffect(() => {
        const appointmentDetail = appointments.find(
            (appoinment) => appoinment.appointmentId === appointmentId
        );
        setAppointment(appointmentDetail);
    }, [appointments])

    return (
        <div>

            <Container className='text-center mt-2'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={appointment?.img?.thumbnail} />
                    <Card.Body>
                        <Card.Title>This is <span className='text-danger'>{appointment?.name}</span></Card.Title>
                        <Card.Text>
                            Ranked No : {appointment?.appointmentId} in our hospital
                        </Card.Text>
                        <Card.Text>
                            {appointment?.gender}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className='bg-primary'>Appointment Done</ListGroupItem>
                    </ListGroup>

                </Card>
            </Container>
        </div>
    );
};

export default Appoinment;

