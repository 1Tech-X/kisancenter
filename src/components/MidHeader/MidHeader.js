import React from 'react'
import { Navbar, Container,  Row, Col,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MidHeader.css'
const MidHeader = () => {
  return (
    <div>
      <Navbar  variant="light" bg="light" className='mid-header'>
        <Container>
          <Row className='w-100-lg'>
            <Col md={3} sm={12}className="p-2 ">
                <Link to="/">
                <Image src='images/logo.png'/>
                </Link>
            </Col>
            <Col md={9} sm={12} className="p-2 d-flex justify-content-end " >
             <Link to="/" ><Image src="https://via.placeholder.com/729x90" fluid  alt="" /></Link>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  )
}

export default MidHeader