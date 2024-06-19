import React from 'react'
import './About.css'
import Layout from '../layout/Layout';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { Home } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const About = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    gap: 10,
    autoplay: true,
  };
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
      </div>
      <Container fluid className='my-5' style={{ paddingLeft: '10vw', paddingRight: '10vw' }}>
        <Row className='gx-lg-5 align-items-center'>
          <Col lg={6}>
            <img className='d-block w-100 rounded-4 shadow-sm' alt="" src={"https://nest-frontend-v6.netlify.app/assets/imgs/page/about-1.png"} />
          </Col>
          <Col lg={6}>
            <h1 className='mb-4'>Welcome to Nest</h1>
            <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
            <p className='my-4'>
              Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>

            <Slider {...settings} className="pt-4 d-block">
              <div style={{width: '100%', margin: '0 1rem !important'}}>
                <img alt="" className='d-block w-100' src="https://nest-frontend-v6.netlify.app/assets/imgs/page/about-2.png" />
              </div>
              <div style={{width: '100%', margin: '0 1rem !important'}}>
              <img alt="" className='d-block w-100' src="https://nest-frontend-v6.netlify.app/assets/imgs/page/about-3.png" />
              </div>
              <div style={{width: '100%', margin: '0 1rem !important'}}>
              <img alt="" className='d-block w-100' src="https://nest-frontend-v6.netlify.app/assets/imgs/page/about-4.png" />
              </div>
              <div style={{width: '100%', margin: '0 1rem !important'}}>
              <img alt="" className='d-block w-100' src="https://nest-frontend-v6.netlify.app/assets/imgs/page/about-2.png" />
              </div>
              <div style={{width: '100%', margin: '0 1rem !important'}}>
              <img alt="" className='d-block w-100' src="https://nest-frontend-v6.netlify.app/assets/imgs/page/about-4.png" />
              </div>
              <div style={{width: '100%', margin: '0 1rem !important'}}>
              <img alt="" className='d-block w-100' src="https://nest-frontend-v6.netlify.app/assets/imgs/page/about-3.png" />
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </Layout >
  )
}

export default About