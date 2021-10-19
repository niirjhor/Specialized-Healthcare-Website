import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Review = (props) => {
    const { id, Name, img } = props.review;
    return (
        <div>
            <Col>
                <Card className='card'>
                    <Card.Img variant="top" className='amb-img' src={img} />
                    <Card.Body>
                        <Card.Title className='fw-bold'>Name of the reviewer:{Name}</Card.Title>
                    </Card.Body>
                    <Link to={`/showReview/${id}`}>
                        <Button className='text-dark bg-warning'>See Details</Button>
                    </Link>
                </Card>

            </Col>
        </div>
    );
};

export default Review;