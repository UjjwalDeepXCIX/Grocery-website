import React from 'react';
import './TopBar.css';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';

const TopBar = () => {
    return (
        <>
            <Container fluid className="border-bottom-1 py-2">
                <Row>
                    <Col xl={3} lg={4}>
                        <div className='topbar-left'>
                            <a href="#">About Us</a>
                            <span>|</span>
                            <a href="#">My Account</a>
                            <span>|</span>
                            <a href="#">Wishlist</a>
                            <span>|</span>
                            <a href="#">Order Tracking</a>
                        </div>
                    </Col>
                    <Col xl={5} lg={3}>
                        <div className='topbar-center text-center'>


                            {/* <marquee direction="up" scrolldelay="300">
                                <ul>
                                    <li>100% Secure delivery withoutnpm install @mui/material @emotion/react @emotion/styled contacting the courier 1</li>
                                    <li>100% Secure delivery without contacting the courier 2</li>
                                    <li>100% Secure delivery without contacting the courier 3</li>
                                    <li>100% Secure delivery without contacting the courier 4</li>
                                </ul>
                                </marquee> */}
                            <ul>
                                <li>100% Secure delivery without contacting the courier 1</li>
                                <li>100% Secure delivery without contacting the courier 2</li>
                                <li>100% Secure delivery without contacting the courier 3</li>
                                <li>100% Secure delivery without contacting the courier 4</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl={4} lg={5}>
                        <div className='topbar-right d-flex'>
                            <p className='my-0'>Need help? Call us: <a rel='noreferrer' id="green-link" href="tel: +91 9876543210" target='_blank'>+91 9875432160</a></p>
                            <span>|</span>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    English
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Hindi</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Marathi</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Gujarati</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <span>|</span>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    USD
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">SLR</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">INR</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">GBP</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TopBar