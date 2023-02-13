import React from 'react'
import { Navbar, Container, Nav, Row, Col,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MidHeader.css'
const MidHeader = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light" className='mid-header'>
        <Container>
          <Row>
            <Col md={3} sm={12}>
              <div className='logo d-flex   justify-content-center'>
                <Link to="/">
                <Image src='images/logo.png'  />
                </Link>
              </div>
              
            </Col>
            <Col md={9} sm={12} className="d-flex justify-content-end header-right" >
             <div className='ad-banner float-right'>
             <a href="#"><img src="https://via.placeholder.com/729x90" class="img-fluid" alt="" /></a>
             </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  )
}

export default MidHeader