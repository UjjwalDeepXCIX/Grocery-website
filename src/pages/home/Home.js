import React, { useEffect, useState } from 'react';
import loaderImage from '../../assets/images/loading.gif';
import './Home.css';
import TopBar from '../../components/topbar/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import SmallCard from '../../components/smallCard/SmallCard';
import ProductLaunchCard from '../../components/productLaunchCard/ProductLaunchCard';
import ProductCard from '../../components/productCard/ProductCard';
import { Search } from '@mui/icons-material';
import Layout from '../layout/Layout';

const Home = () => {

  const TopSellingProducts = [
    {
      product_image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-1.jpg',
      product_name: 'Nestle Original Coffee-Mate Coffee Creamer',
      product_price: '33.65',
      product_mrp: '40',
      product_rating: '3.5',
    },
    {
      product_image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-2.jpg',
      product_name: 'Nestle Original Coffee-Mate Coffee Creamer',
      product_price: '33.65',
      product_mrp: '40',
      product_rating: '3.5',
    },
    {
      product_image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-3.jpg',
      product_name: 'Nestle Original Coffee-Mate Coffee Creamer',
      product_price: '33.65',
      product_mrp: '40',
      product_rating: '3.5',
    }
  ]

    return (
        <Layout>
            <section className='hero-image'>
                <h1>What are you looking for?</h1>
                <InputGroup className="my-3 search shadow-lg">
                    <InputGroup.Text>
                        <Search />
                    </InputGroup.Text>
                    <Form.Control placeholder='Search products...' />
                    <Button variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>

                </InputGroup>
                <ul className='search-list'>
                    <li><a href="">Coke</a></li>
                    <li><a href="">Coke</a></li>
                    <li><a href="">Coke</a></li>
                    <li><a href="">Coke</a></li>
                </ul>
            </section>

            <Container fluid style={{ paddingLeft: '10vw', paddingRight: '10vw' }} className='py-5 my-5'>
                <h1 className='my-5 text-center main-section-heading'>Trending Products</h1>
                <Row>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                    <Col>
                        <ProductCard />
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ paddingLeft: '10vw', paddingRight: '10vw' }} className='py-5 my-5'>
                <h1 className='my-5 text-center main-section-heading'>Deals of the day</h1>
                <Row>
                    <Col lg={3}>
                        <ProductLaunchCard />
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ paddingLeft: '10vw', paddingRight: '10vw' }} className='py-5'>
                <Row>
                    <Col lg={3}>
                        <h4 className='section-heading'>Top Selling</h4>
                        {TopSellingProducts.map((product) => {
                            return <SmallCard data={product} />
                        })}
                    </Col>
                    <Col lg={3}>
                        <h4 className='section-heading'>Top Selling</h4>
                        {TopSellingProducts.map((product) => {
                            return <SmallCard data={product} />
                        })}
                    </Col>
                    <Col lg={3}>
                        <h4 className='section-heading'>Top Selling</h4>
                        {TopSellingProducts.map((product) => {
                            return <SmallCard data={product} />
                        })}
                    </Col>
                    <Col lg={3}>
                        <h4 className='section-heading'>Top Selling</h4>
                        {TopSellingProducts.map((product) => {
                            return <SmallCard data={product} />
                        })}
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Home