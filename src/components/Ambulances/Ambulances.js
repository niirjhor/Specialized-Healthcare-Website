import React, { useEffect, useState } from 'react';
import Ambulance from './Ambulance/Ambulance';
import { Row } from 'react-bootstrap';

const Ambulances = () => {
    const [ambulances, setAmbulances] = useState([]);
    useEffect(() => {
        fetch('./ambulance.json')
            .then(res => res.json())
            .then(data => setAmbulances(data))
    }, [])
    return (
        <div className=''>
            <h2 className=''>Book an Ambulance</h2>
            <Row xs={1} md={2} className="g-4">
                {
                    ambulances.map(ambulance => <Ambulance ambulance={ambulance}
                        key={ambulance.id}></Ambulance>)

                }
            </Row>
        </div>
    );
};

export default Ambulances;