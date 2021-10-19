import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Appoinment = () => {
    const { appointmentId } = useParams();
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('/doctorsDetails.json')
            .then(res => res.json())
            .then(data => setAppointments(data.Appoinment))
    }, []);

    useEffect(() => {
        const appointmentDetail = appointments.find(
            (appoinment) => appoinment.appointmentId === appointmentId
        );
        setAppointments(appointmentDetail);
    }, [appointments]);

    return (
        <div>

            This is appoinment {appointmentId}
        </div>
    );
};

export default Appoinment;

