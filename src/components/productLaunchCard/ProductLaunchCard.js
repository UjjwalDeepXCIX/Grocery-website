import React from 'react';
import './ProductLaunchCard.css';
import { Col, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';
import { Rating } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <>
                <Row className='justify-content-center m-auto gx-0' style={{ width: '80%' }}>
                    <Col>
                        <div className='countdown-box text-center'>
                            <span>{days}</span>
                            <p className='mb-0'>Days</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='countdown-box text-center'>
                            <span>{hours}</span>
                            <p className='mb-0'>Hours</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='countdown-box text-center'>
                            <span>{minutes}</span>
                            <p className='mb-0'>Mins</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='countdown-box text-center'>
                            <span>{seconds}</span>
                            <p className='mb-0'>Sec</p>
                        </div>
                    </Col>
                </Row>

            </>
        );
    }
};

const ProductLaunchCard = () => {
    return (
        <>
            <div className='product-launch-card'>
                <div className='product-launch-image'>
                    <a href="">
                        <img className='d-block w-100' src='https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-5.png' alt="" />
                    </a>
                </div>
                <div className='product-launch-content'>
                    <Countdown date={Date.now() + 150000000} renderer={renderer} />
                    <div className='bg-white rounded-3 p-4 mt-3 shadow-sm'>
                        <h6 className='mb-1'><a href="">Seeds of Change Organic Quinoa, Brown, & Red Rice</a></h6>
                        <div className='d-flex align-items-center'>
                            <Rating value={3.5} readOnly
                                precision={0.5} size="small"
                            />
                            <span className='rating'>({3.5})</span>
                        </div>
                        <p className='text-sm text-gray my-2'>By <span className='text-green'>NestFood</span></p>
                        <div className="d-flex align-items-center justify-content-between">
                        <div className='price'>
                            <span className='rate'>$ 33.86</span>
                            <span className='mrp'>$ 35</span>
                        </div>
                        <button><ShoppingCart /> Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductLaunchCard