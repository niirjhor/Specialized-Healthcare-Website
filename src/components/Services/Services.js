import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./pathologicalTest.json')
            .then(res => res.json())
            .then(data => setServices(data)) //fetch API data
    }, [])

    return (
        <div>
            <Container fluid className='bg-warning fw-bold'>
                <h3 className='text-danger pt-2'>More than 400 Test are available</h3>
                <br />
                <h4 className='text-dark fw-bold pb-2'>Some of the tests are listed below with price</h4>
                <Row xs={1} md={2} className="g-4">
                    {
                        services.map(service => <Service service={service}
                            key={service.id}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;