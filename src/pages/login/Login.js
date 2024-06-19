import React from 'react';
import './Login.css';
import Layout from '../layout/Layout';
import { Container, Breadcrumb, Row, Col, Form } from 'react-bootstrap';
import { Home } from '@mui/icons-material';

const Login = () => {
    return (
        <Layout>
            <div className='py-3 border-bottom-1'>
                <Container fluid style={{}}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#"><Home /> Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                            Library
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>

                </Container>
                <Container className='my-5 py-5'>
                    <Row className='justify-content-center'>
                        <Col lg={9}>
                            <Row className='gx-lg-5'>
                                <Col lg={6}>
                                    <img src={'https://nest-frontend-v6.netlify.app/assets/imgs/page/login-1.png'} alt="" className='d-block w-100 rounded-4' />
                                </Col>
                                <Col lg={6}>
                                    <h1>Login</h1>
                                    <p>Don't have an account? <a href="">Create here</a></p>
                                    <Form>
                                        <Form.Control className='mb-3' type="text" placeholder='Username or Email*' />
                                        <Form.Control className='mb-3' type="password" placeholder='Your Password*' />
                                        <Row className='justify-content-between align-items-center'>
                                            <Col lg={4}>
                                                <Form.Control className='mb-3' type="text" placeholder='Security Code*' />
                                            </Col>
                                            <Col lg={4}>
                                                <div className='security'>
                                                    <span className='text-danger'>8</span>
                                                    <span className='text-success'>7</span>
                                                    <span className='text-primary'>6</span>
                                                    <span className='text-warning'>5</span>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <Form.Check
                                                type={'checkbox'}
                                                label={'Remember me'}
                                            />
                                            <a href="" className='text-secondary'>Forgot Password?</a>
                                        </div>
                                        <button className='mt-4'>Login</button>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}

export default Login