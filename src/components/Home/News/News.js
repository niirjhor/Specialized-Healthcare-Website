import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const News = () => {
    return (
        <div>
            <div className="container">
                <CardGroup className='pb-3'>
                    <Card className='mx-5'>
                        <Card.Img variant="top" src="https://media.istockphoto.com/photos/young-patient-talks-with-pediatrician-picture-id1293681843?b=1&k=20&m=1293681843&s=170667a&w=0&h=ZRGx2O8fae6Z2fQeBRdU9EYP0M2dAH1v_VycLEGY_og=" />
                        <Card.Body>
                            <Card.Title>Lung cancer survival rate in England improves</Card.Title>
                            <Card.Text>
                                Which toil and pain can procure him some great pleasure. To take a trivial example, which of us laborious physical exercise.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className='mx-5'>
                        <Card.Img variant="top" src="https://media.istockphoto.com/photos/doctor-child-and-mother-wearing-facemasks-picture-id1298520812?b=1&k=20&m=1298520812&s=170667a&w=0&h=niBbnGBRF0x_IIVxDixsl6W2YgIaRN95IPTmeBD5nno=" />
                        <Card.Body>
                            <Card.Title>Negative statin stories add to heart health risk</Card.Title>
                            <Card.Text>
                                There anyone who loves or pursues or desires to obtain pains of itself, because it is pain because occasionally circumstances occur.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 20 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className='mx-5'>
                        <Card.Img variant="top" src="https://media.istockphoto.com/photos/pediatricians-office-picture-id1266489306?b=1&k=20&m=1266489306&s=170667a&w=0&h=MNau-9kNUJj1MjpxAODy8qBQ_v4egjvptsCG72q7yow=" />
                        <Card.Body>
                            <Card.Title>How to handle your kids’ from mystery ailments</Card.Title>
                            <Card.Text>
                                The great explorer of the truth, master builder of human happiness one rejects, dislikes, or avoids pleasure itself because it is pleasure.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 30 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div >
        </div>
    );
};

export default News;