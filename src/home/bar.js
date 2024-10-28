import Button from 'react-bootstrap/Button';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/logo.png'
import Searchicon from '../images/images-removebg-preview.png'
import Car from '../images/images-removebg-preview (1).png'
import Sell from '../images/sell.png'
import Property from '../images/images-removebg-preview (2).png'

import './bar.css'

function NavScrollExample() {
    return (
        <div className='navbarContinar'>


            <Navbar expand="lg" className="bg-body navBarR">
                <Container fluid>
                    <Navbar.Brand href="#"><img className='logo' src={Logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div className='navBarCircle'><img className='car' src={Car} /> <h4>Motors</h4> </div>
                            <div className='navBarCircle1'><img className='car1' src={Property} /> <h4>Property</h4> </div>

                        </Nav>

                        <div className='search-continar'>



                            <NavDropdown className='navDown' title="Pakistan" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Form className="search">
                                <div className='searchDiv'>

                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button className='searchbtn'><img src={Searchicon} /></Button>
                                </div>
                                <h5 className='login' >login</h5>
                                <img className='sell' src={Sell} />

                            </Form>

                        </div>
                    </Navbar.Collapse>

                </Container>


            </Navbar>
            <hr />

        </div>

    );
}

export default NavScrollExample;