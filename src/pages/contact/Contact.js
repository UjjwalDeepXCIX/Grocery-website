import React from 'react'
import Layout from '../layout/Layout'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Button, TextField } from '@mui/material'
import { Call, Mail, WhatsApp } from '@mui/icons-material'
import './Contact.css'

const Contact = () => {
    return (
        <Layout>
            <Container className='my-5 py-5'>
                <Row>
                    <Col lg={6}>
                        <h1>Contact Us</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <div className='my-5'>
                            <div className='d-flex align-items-center justify-content-start mb-4'>
                                <div className='contact-icon'>
                                    <Call className='icon' />
                                </div>
                                <div className='contact-details ms-3'>
                                    <p className='my-0'>Call Us:</p>
                                    <a className='contact-item' href="">+91 987836743458</a>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-start mb-4'>
                                <div className='contact-icon'>
                                    <WhatsApp className='icon' />
                                </div>
                                <div className='contact-details ms-3'>
                                    <p className='my-0'>Text Us:</p>
                                    <a className='contact-item' href="">+91 987836743458</a>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-start mb-4'>
                                <div className='contact-icon'>
                                    <Mail className='icon' />
                                </div>
                                <div className='contact-details ms-3'>
                                    <p className='my-0'>Mail Us:</p>
                                    <a className='contact-item' href="">info@example.com</a>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-start mb-4'>
                                <div className='contact-icon'>
                                    <Call className='icon' />
                                </div>
                                <div className='contact-details ms-3'>
                                    <p className='my-0'>Address:</p>
                                    <a className='contact-item' href="">Noida, Uttar Pradesh</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Card className='p-3'>
                            <h3>Send Message</h3>
                            <hr />
                            <form>
                                <TextField className='w-100 mb-4' id="outlined-basic" label="Full Name" variant="outlined" />
                                <TextField className='w-100 mb-4' id="outlined-basic" label="Email Address" variant="outlined" />
                                <TextField className='w-100 mb-4' id="outlined-basic" label="Mobile Number" variant="outlined" />
                                <TextField className='w-100 mb-4' id="outlined-basic" label="Subject" variant="outlined" />
                                <TextField multiline rows={3} className='w-100' id="outlined-basic" label="Message" variant="outlined" />
                                <Button variant="contained" className='mt-4 d-block m-auto py-3 px-5' color="success">Send Message</Button>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.55784930352!2d77.38706537620709!3d28.613038375675455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce558519d6e05%3A0x849bdf16ff9c9f!2sInzint!5e0!3m2!1sen!2sin!4v1716878961785!5m2!1sen!2sin" width="100%" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Container>
        </Layout>
    )
}

export default Contact