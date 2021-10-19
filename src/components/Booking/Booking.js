import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

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
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>

        </div>
    );
};

export default Booking;