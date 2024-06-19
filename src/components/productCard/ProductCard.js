import React from 'react';
import './ProductCard.css';
import { Card, ButtonGroup, Button } from 'react-bootstrap';
import { Tooltip, Rating } from '@mui/material';
import { CompareArrowsOutlined, FavoriteBorderOutlined, FavoriteOutlined, RemoveRedEyeOutlined, ShoppingCart } from '@mui/icons-material';

const ProductCard = () => {
    return (
        <>
            <Card className='rounded-4 p-3'>
                <div className='product-badge badge-pink'>
                    <span>Sale</span>
                </div>
                <div className='product-image rounded-4'>
                    <a href="">
                        <img className='d-block w-100 rounded-4' src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg" alt="" />
                        <img className='d-block w-100 hover-image rounded-4' src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-2.jpg" alt="" />
                    </a>
                </div>
                <div className='product-action'>
                    <Tooltip title="Add to Wishlist" arrow placement="top">
                        <a href=""><FavoriteBorderOutlined sx={{fontSize: 20, color: '#61B97F;'}} /></a>
                    </Tooltip>
                    <Tooltip title="Compare Product" arrow placement="top">
                        <a href=""><CompareArrowsOutlined sx={{fontSize: 20, color: '#61B97F;'}} /></a>
                    </Tooltip>
                    <Tooltip title="Quick View" arrow placement="top">
                        <a href=""><RemoveRedEyeOutlined sx={{fontSize: 20, color: '#61B97F;'}} /></a>
                    </Tooltip>
                </div>
                <div>
                    <span>Snacks</span>
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
            </Card>
        </>
    )
}

export default ProductCard