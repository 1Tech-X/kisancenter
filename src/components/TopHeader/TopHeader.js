import React from 'react'
import { Navbar, Container , Nav, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './TopHeader.css'
const TopHeader = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" className='top-bar '>
        <Container fluid>
          <Nav className="me-auto ">
            <Nav.Link as={Link} to="/"><i className="fas fa-calendar-alt"></i> | 09-02-2023</Nav.Link>
          </Nav>
        <Nav className='ms-auto'>
        <Nav.Link as={Button} className="btn-success text-light "><i className="fas fa-user"></i> Super login</Nav.Link>
        <Nav.Link as={Button} className="btn-primary  text-light ms-2"><i className="fas fa-sign-in-alt"></i> User login</Nav.Link>
        <Nav.Link as={Button} className="btn-warning text-light ms-2"><i className="fas fa-signup"></i> Sign Up</Nav.Link>
         <Nav.Link as={Link} to="/"><i className="fab fa-facebook"></i></Nav.Link>
         <Nav.Link as={Link} to="/"><i className="fab fa-twitter"></i></Nav.Link>
         <Nav.Link as={Link} to="/"><i className="fab fa-instagram"></i></Nav.Link>
         <Nav.Link as={Link} to="/"><i className="fab fa-whatsapp"></i></Nav.Link>
         <Nav.Link as={Link} to="/"><i className="fab fa-youtube"></i></Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default TopHeader