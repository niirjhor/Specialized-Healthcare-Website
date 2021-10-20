import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import MedicalDepartments from '../MedicalDepartments/MedicalDepartments';
import News from '../News/News';

const Home = () => {
    return (
        <div>
            <Container fluid className='bg-light'>
                <Banner></Banner>
                <h2 className='text-danger fw-bold py-3'>Our Best Consultants</h2>

                <Experts></Experts>
                <h2 className='text-danger fw-bold py-3'>Departments and Progress</h2>
                <MedicalDepartments></MedicalDepartments>
                <h2 className='text-danger fw-bold py-3'>Recent Blogs</h2>
                <News></News>
            </Container>
        </div>
    );
};

export default Home;