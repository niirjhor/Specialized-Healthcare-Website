import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useFirebases from '../../hook/useFirebases';


const Register = () => {
    const { user, logOut, handleRegistration,
        handleEmailChange,
        handlePasswordChange } = useFirebases();
    return (
        <div>
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3 mt-3 w-50 mx-auto" controlId="formBasicEmail">

                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3 w-50  mx-auto" controlId="formBasicPassword">

                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 w-50  mx-auto" controlId="formBasicPassword">

                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Confirm Your Password" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <p>----------------------or------------------------</p>

                <Button variant="primary" type="submit">
                    Google Sign In
                </Button>

                <p>Already Have an Account?</p>


            </Form>
        </div>
    );
};

export default Register;