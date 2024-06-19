import React, { useState } from 'react';
import './ProductListing.css';
import { Breadcrumb, Card, Col, Container, Row } from 'react-bootstrap';
import Layout from '../layout/Layout';
import { Close, Home } from '@mui/icons-material';

const ProductListing = () => {
    const [selectedCategories, setSelectedCategories] = useState([1, 2, 3, 4, 5, 6]);

    const categories = [
        {
            category_id: 1, category_name: 'Mango', product_count: 4, icon: 'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'
        },
        {
            category_id: 2, category_name: 'Apple', product_count: 60, icon: 'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'
        },
        {
            category_id: 3, category_name: 'Guava', product_count: 3, icon: 'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'
        },
        {
            category_id: 4, category_name: 'Pineapple', product_count: 1, icon: 'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'
        },
        {
            category_id: 5, category_name: 'Banana', product_count: 19, icon: 'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'
        },
        {
            category_id: 6, category_name: 'Grapes', product_count: 25, icon: 'https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg'
        },
    ];

    const setCategoryId = (id) => {
        if (!selectedCategories.includes(id)) {
            setSelectedCategories([...selectedCategories, id]);
        }
    };

    const removeCategory = (id) => {
        setSelectedCategories(selectedCategories.filter(cat => cat !== id));
    };

    return (
        <Layout>
            <Container fluid style={{ paddingLeft: '10vw', paddingRight: '10vw' }} className='my-5'>
                <div className="page-header">
                    <Row className='align-items-center'>
                        <Col lg={3}>
                            <h2>Product Listing</h2>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#"><Home /> Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                    Shop
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>Fruits</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                        <Col lg={9} className='text-end d-none d-lg-block'>
                            <ul>
                                {selectedCategories.map((category) => {
                                    return (
                                        <li className='category-tags shadow' key={category}>
                                            <span onClick={() => removeCategory(category)} className='close-icon'><Close fontSize={'small'} /></span>
                                            <span>{categories.find(cat => cat.category_id === category).category_name}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Container fluid style={{ paddingLeft: '10vw', paddingRight: '10vw' }} className='my-5'>
                <Row>
                    <Col lg={3}>
                        <Card className="shadow rounded-3 p-4 filter-card">
                            <h5 className='my-0 filter-card-title'>Category</h5>

                            <ul>
                                {categories.map((category) => {
                                    const isSelected = selectedCategories.includes(category.category_id);
                                    return (
                                        <li 
                                            key={category.category_id} 
                                            className={`category-list ${isSelected ? 'selected' : ''}`} 
                                            onClick={() => setCategoryId(category.category_id)}
                                        >
                                            <span className='d-flex align-items-center'> 
                                                <img className='icon' src={category.icon} alt={category.category_name + ' icon'} /> 
                                                <span>{category.category_name}</span>
                                            </span>
                                            <span className='count'>{category.product_count}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </Card>
                    </Col>
                    <Col lg={9}></Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default ProductListing;
