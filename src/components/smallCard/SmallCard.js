import React from 'react';
import './SmallCard.css';
import { Col, Row } from 'react-bootstrap';
import { Rating } from '@mui/material';

const SmallCard = (props) => {
    return (
        <>
            <div className='small-card'>
                <Row>
                    <Col md={4}>
                        <img className='w-100 d-block' alt={props.data.product_name} src={props.data.product_image} />
                    </Col>
                    <Col md={8}>
                        <h6 className='mb-0'><a href="">{props.data.product_name}</a></h6>
                        <div className='d-flex align-items-center'>
                        <Rating value={props.data.product_rating} readOnly
                            precision={0.5} size="small"
                        />
                        <span className='rating'>({props.data.product_rating})</span>
                        </div>
                        <div className='price'>
                            <span className='rate'>$ {props.data.product_price}</span>
                            <span className='mrp'>$ {props.data.product_mrp}</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default SmallCard