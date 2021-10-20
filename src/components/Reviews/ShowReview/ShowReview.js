import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ShowReview = () => {
    const { showReviewID } = useParams();
    return (
        <div>
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Reviews</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>See Reviews of  <span className='text-danger fw-bold'>No{showReviewID}</span> </p>
                        <p>Very Good Diagonistic Service</p>
                    </Modal.Body>

                </Modal.Dialog>

            </div>
        </div>
    );
};

export default ShowReview;