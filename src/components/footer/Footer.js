import { Call, Email, Room, Schedule, WhatsApp } from '@mui/icons-material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css';

const Footer = () => {
  return (
    <>
    <Container fluid style={{ paddingLeft: '10vw', paddingRight: '10vw' }} className='py-3 footer'>
        <Row className="gx-lg-5">
            <Col lg={3} md={12} sm={12} className=''>
                <img src={'https://nest-frontend-v6.netlify.app/assets/imgs/theme/logo.svg'} />
                <p className='text-sm mt-3'>Awesome grocery store website template</p>
                <ul>
                    <li>
                        <Room className='footer-icons me-2' /> 
                        <span>
                        5171 W Campbell Ave undefined Kent, Utah 53127 United States
                        </span>
                    </li>
                    <li>
                        <Call className='footer-icons me-2' /> 
                        <span>
                        +91 93948758340
                        </span>
                    </li>
                    <li>
                        <Email className='footer-icons me-2' /> 
                        <span>
                        info@example.com
                        </span>
                    </li>
                    <li>
                        <Schedule className='footer-icons me-2' /> 
                        <span>
                        09:00 AM - 06:30 PM
                        </span>
                    </li>
                </ul>
            </Col>
            <Col lg={6} md={12} sm={12}>
                <Row className="gx-lg-5">
                    <Col lg={3} md={6} sm={12} className=''>
                        <h3 className="mt-4">Company</h3>

                        <ul className='mt-4'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                        </ul>

                    </Col>
                    <Col lg={3} md={6} sm={12} className=''>
                        <h3 className="mt-4">Company</h3>

                        <ul className='mt-4'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                        </ul>

                    </Col>
                    <Col lg={3} md={6} sm={12} className=''>
                        <h3 className="mt-4">Company</h3>

                        <ul className='mt-4'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                        </ul>

                    </Col>
                    <Col lg={3} md={6} sm={12} className=''>
                        <h3 className="mt-4">Company</h3>

                        <ul className='mt-4'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                        </ul>

                    </Col>
                </Row>
            </Col>
            <Col lg={3} md={12} sm={12} className=''>
                <h3 className='mt-4'>Install Apps</h3>
                <p className='mt-4'>From App Store or Google Play</p>

                <div className='d-flex justify-content-start align-items-center'> 
                <a href="" className='me-lg-3 my-3 my-lg-0'>
                    <img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/app-store.jpg" width="150" alt=""/>
                </a>
                <a href="">
                    <img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/google-play.jpg" width="150" alt=""/>
                </a>
                </div>

                <p className='mt-5 mb-4'>Secured Payment Gateways</p>
                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/payment-method.png" alt="" />
            </Col>
        </Row>
    </Container>

    <a href="" className='fixed-button'>
        <WhatsApp className='icon' />
    </a>
    </>
  )
}

export default Footer