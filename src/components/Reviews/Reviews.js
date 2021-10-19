import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {
                    reviews.map(review => <Review review={review}
                        key={review.id}></Review>)

                }
            </Row>
        </div>
    );
};

export default Reviews;