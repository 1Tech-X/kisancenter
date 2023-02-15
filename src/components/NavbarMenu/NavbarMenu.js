import React from 'react'
import { Container, Navbar, Nav,NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarMenu.css';
const NavbarMenu = (props) => {
  const schemename=props.schemename;
  const subscheme=props.subscheme;
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='NavbarMenu'>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title={schemename} id="collasible-nav-dropdown" className='rounded-0'>
              <NavDropdown.Item as={Link} to="/">{subscheme}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarMenu