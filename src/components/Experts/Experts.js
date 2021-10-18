import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Experts = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))  //fetch API data
    }, []);

    return (
        <div>

            <Row xs={1} md={2} className="g-4">
                {
                    doctors.map(doctor => <Doctor
                        doctor={doctor}
                        key={doctor.id}></Doctor>)
                }


            </Row>
        </div>
    );
};

export default Experts;