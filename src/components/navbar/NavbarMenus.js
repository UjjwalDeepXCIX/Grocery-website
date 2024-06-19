import { AddCircleOutlined, GridView, HeadsetMic } from '@mui/icons-material'
import React, { useState } from 'react'
import { Col, Container, Dropdown, Row, DropdownButton } from 'react-bootstrap'

const NavbarMenus = () => {


    return (
        <>
            <Container fluid  style={{ paddingLeft: '10vw', paddingRight: '10vw', background: '#61B97F' }} className='py-3 sticky-top'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='navbar-menus'>
                        <div className='d-flex align-items-center justify-content-start'>
                            <div className='trending-categories'>
                                <Dropdown className='trending'>
                                    <Dropdown.Toggle >
                                        <GridView className='me-1' /> Trending Categories
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='shadow-sm rounded-4' style={{ borderColor: '#61B97F' }}>
                                        <Row className='gy-3'>
                                            <Col md={6} lg={6} xs={6}>
                                                <a href="#" className='trending-menu d-flex align-items-center'>
                                                    <img src={'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'} alt="icon" height="30" width="30" />
                                                    <span className='ms-3'>Milk and Dairies</span>
                                                </a>
                                            </Col>
                                            <Col md={6} lg={6} xs={6}>
                                                <a href="#" className='trending-menu d-flex align-items-center'>
                                                    <img src={'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'} alt="icon" height="30" width="30" />
                                                    <span className='ms-3'>Milk and Dairies</span>
                                                </a>
                                            </Col>
                                            <Col md={6} lg={6} xs={6}>
                                                <a href="#" className='trending-menu d-flex align-items-center'>
                                                    <img src={'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'} alt="icon" height="30" width="30" />
                                                    <span className='ms-3'>Milk and Dairies</span>
                                                </a>
                                            </Col>
                                            <Col md={6} lg={6} xs={6}>
                                                <a href="#" className='trending-menu d-flex align-items-center'>
                                                    <img src={'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'} alt="icon" height="30" width="30" />
                                                    <span className='ms-3'>Milk and Dairies</span>
                                                </a>
                                            </Col>
                                            <Col md={6} lg={6} xs={6}>
                                                <a href="#" className='trending-menu d-flex align-items-center'>
                                                    <img src={'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'} alt="icon" height="30" width="30" />
                                                    <span className='ms-3'>Milk and Dairies</span>
                                                </a>
                                            </Col>
                                            <Col md={6} lg={6} xs={6}>
                                                <a href="#" className='trending-menu d-flex align-items-center'>
                                                    <img src={'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'} alt="icon" height="30" width="30" />
                                                    <span className='ms-3'>Milk and Dairies</span>
                                                </a>
                                            </Col>
                                            <Col md={6} lg={6} xs={6}>
                                                <a href="#" className='trending-menu d-flex align-items-center'>
                                                    <img src={'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'} alt="icon" height="30" width="30" />
                                                    <span className='ms-3'>Milk and Dairies</span>
                                                </a>
                                            </Col>
                                            <Col md={6} lg={6} xs={6}>
                                                <a href="#" className='trending-menu d-flex align-items-center'>
                                                    <img src={'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'} alt="icon" height="30" width="30" />
                                                    <span className='ms-3'>Milk and Dairies</span>
                                                </a>
                                            </Col>
                                            <Col md={6} lg={6} xs={6}>
                                                <a href="#" className='trending-menu d-flex align-items-center'>
                                                    <img src={'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'} alt="icon" height="30" width="30" />
                                                    <span className='ms-3'>Milk and Dairies</span>
                                                </a>
                                            </Col>
                                            <Col md={6} lg={6} xs={6}>
                                                <a href="#" className='trending-menu d-flex align-items-center'>
                                                    <img src={'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'} alt="icon" height="30" width="30" />
                                                    <span className='ms-3'>Milk and Dairies</span>
                                                </a>
                                            </Col>
                                        </Row>
                                        <div className='text-center mt-3'>
                                            <a href="#"><AddCircleOutlined /> Show more...</a>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div>
                            <div className='menus d-flex align-items-center justify-content-between ms-4' >
                                <a className='text-white me-3' href="">Deals</a>
                                <a className='text-white mx-3' href="">Deals</a>
                                <a className='text-white mx-3' href="">Deals</a>
                                <a className='text-white mx-3' href="">Deals</a>
                                <a className='text-white mx-3' href="">Deals</a>
                                <DropdownButton
                                className="mega-menu-dropdown bg-transparent border-0"
                                    as={'ButtonGroup'}
                                    key={'down-centered'}
                                    id={`dropdown-button-drop-down-centered`}
                                    drop={'down-centered'}
                                    variant="secondary"
                                    title={` Drop down-centered `}
                                >
                                    <Row>
                                        <Col lg={8}>
                                            <Row>
                                                <Col >
                                                    <a className='menu-title'>Fruits & Vegetables</a>
                                                    <ul className='mega-menu-items'>
                                                        <li>
                                                            <a href="">Menu 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="">Menu 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="">Menu 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="">Menu 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="">Menu 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="">Menu 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="">Menu 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="">Menu 1</a>
                                                        </li>
                                                    </ul>
                                                </Col>
                                                <Col ></Col>
                                                <Col ></Col>
                                            </Row>
                                        </Col>
                                        <Col lg={4}>
                                            <img width="100%" src="https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-menu.png" />
                                        </Col>
                                    </Row>
                                </DropdownButton>
                                <a className='text-white mx-3' href="">Deals</a>
                                <a className='text-white mx-3' href="">Deals</a>
                                <a className='text-white mx-3' href="">Deals</a>
                                <a className='text-white mx-3' href="">Deals</a>
                                <a className='text-white mx-3' href="">Deals</a>
                                <a className='text-white ms-3' href="">Deals</a>
                            </div>
                        </div>
                    </div>
                    <div className='support d-flex align-items-center justify-content-start'>
                        <HeadsetMic className='icon' />
                        <div className='text-center ms-3'>
                            <h5 className='m-0'>+91 9876543210</h5>
                            <p className='m-0'>24/7 Support Center</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default NavbarMenus