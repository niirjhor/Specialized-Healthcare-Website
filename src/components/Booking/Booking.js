import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { callAmbulanceID } = useParams();

    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Booking Information</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Booking confirmation for <span className='text-danger fw-bold'>Ambulance{callAmbulanceID}</span> </p>
                    <button>Booking Done</button>
                </Modal.Body>

            </Modal.Dialog>

        </div>
    );
};

export default Booking;