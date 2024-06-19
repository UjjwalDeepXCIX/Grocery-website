import React from 'react';
import './Navbar.css';
import { Container, Dropdown } from 'react-bootstrap';
import logo from '../../assets/images/logo.svg';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'
import { Badge, Button, IconButton } from '@mui/material';
import { Close, Compare, FavoriteBorder, FavoriteOutlined, LocationOnOutlined, LogoutOutlined, PeopleOutlined, PersonOutlined, PersonOutlineOutlined, SellOutlined, SettingsOutlined, ShoppingCartOutlined, TagOutlined } from '@mui/icons-material'
import NavbarMenus from './NavbarMenus';

const Navbar = () => {
    const options = [
        { name: 'Swedish', value: 'sv' },
        { name: 'English', value: 'en' },
        {
            type: 'group',
            name: 'Group name',
            items: [
                { name: 'Spanish', value: 'es' },
            ]
        },
    ]
    return (
        <>
            <Container fluid style={{ paddingLeft: '10vw', paddingRight: '10vw' }} className='py-3'>
                <div className='navbar-wrap'>
                    <div className='company-logo'>
                        <img src={logo} alt="Company Logo" />
                    </div>
                    <form className='main-search-bar'>
                        <select>
                            <option>All Categories</option>
                            <option>Groceries</option>
                        </select>
                        <span>|</span>
                        <input type="text" placeholder='Search for items...' />
                    </form>
                    <div className='navbar-right-menu d-flex align-items-center'>
                        <a className='me-3' href="#">
                            <Badge badgeContent={4} color="success">
                                <Compare color="action" />
                            </Badge>
                        </a>
                        <a className='mx-3' href="#">
                            <Badge badgeContent={4} color="success">
                                <FavoriteOutlined color="action" />
                            </Badge>
                        </a>
                        <Dropdown className='mx-3'>
                            <Dropdown.Toggle>
                                <Badge badgeContent={4} color="success">
                                    <ShoppingCartOutlined color="action" />
                                </Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu id="wishlist-menu">
                                <div className='d-flex justify-content-between align-items-start'>
                                    <div className='product-item d-flex align-items-start justify-content-start'>
                                        <img height="100" width="100" src={'https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-3.jpg'} alt="Product Image" />
                                        <div className='ms-4'>
                                            <a href="">
                                                Daisy Casual Bag</a>
                                            <p>1 × $800.00</p>
                                        </div>
                                    </div>
                                    <IconButton>
                                        <Close />
                                    </IconButton>

                                </div>
                                <div className='d-flex justify-content-between align-items-start mt-3'>
                                    <div className='product-item d-flex align-items-start justify-content-start'>
                                        <img height="100" width="100" src={'https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-2.jpg'} alt="Product Image" />
                                        <div className='ms-4'>
                                            <a href="">
                                                Daisy Casual Bag</a>
                                            <p>1 × $800.00</p>
                                        </div>
                                    </div>
                                    <IconButton>
                                        <Close />
                                    </IconButton>

                                </div>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <p>Total:</p>
                                    <p>$4000.00</p>
                                </div>
                                <div className='d-flex justify-content-between'>

                                    <Button variant="outlined" >View Cart</Button>
                                    <Button variant="contained">Checkout</Button>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='ms-3'>
                            <Dropdown.Toggle>
                                <PersonOutlineOutlined id="profileToggleIcon" color="action" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item><PersonOutlined className='me-2' /> My Account</Dropdown.Item>
                                <Dropdown.Item><LocationOnOutlined className='me-2' /> Order Tracking</Dropdown.Item>
                                <Dropdown.Item><SellOutlined className='me-2' /> My Vouchers</Dropdown.Item>
                                <Dropdown.Item><FavoriteBorder className='me-2' /> My Wishlist</Dropdown.Item>
                                <Dropdown.Item><SettingsOutlined className='me-2' /> Settings</Dropdown.Item>
                                <Dropdown.Item><LogoutOutlined className='me-2' /> Sign Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Container>
            <NavbarMenus />
        </>
    )
}

export default Navbar