import React from 'react'
import { Navbar, Container , Nav} from 'react-bootstrap'
const TopHeader = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default TopHeader