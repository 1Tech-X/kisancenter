import React from 'react'
import CustomBreadCumb from '../components/CustomBreadCumb/CustomBreadCumb'
import TopHeader from '../components/TopHeader/TopHeader'
import MidHeader from '../components/MidHeader/MidHeader'
import { Col, Container, Row, Image, Card } from 'react-bootstrap'
import NavbarMenu from '../components/NavbarMenu/NavbarMenu'
import Footer from '../components/Footer/Footer'
import { Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
const ContactUs = () => {
  return (
    <div>
      <TopHeader />
        <MidHeader />
        <NavbarMenu />
        <Container>
        <CustomBreadCumb breadname="Contact Us" />
        <Row>
          <Col md={6}>
            <Typography variant='h4'
            sx={{fontWeight:"700", marginTop:"1.5rem"}}
            >
            Let's Discuss What's Next
            </Typography>
            <Typography variant='subtitle2' sx={{marginTop:"1rem"}}>
            Drop us a message! We’ll set up a time to chat over the phone or in-person to know more about your business needs. All primary conferences are free of charge.
            </Typography>
            <Image fluid src="images/contact.jpg" />
          </Col>
          <Col md={6}>
            
            <Card className='rounded-0'>
              <Card.Body className='p-4'>
              <h4 className='text-center mt-3 mb-4'
              style={{fontWeight:"700",letterSpacing:"-1px"}}
              >How Can We Help!</h4>
              <TextField 
               label="Name" 
               variant="outlined"
               placeholder='Enter you fullname'
               fullWidth
                />
              <TextField 
               
               label="Mobile Number" 
               variant="outlined"
               placeholder='Enter Mobile Number'
               fullWidth
               sx={{marginTop:"1.5rem"}}
                />
              <TextField 
               
               label="Your Email" 
               variant="outlined"
               placeholder='example@gmail.com'
               fullWidth
               sx={{marginTop:"1.5rem"}}
                />

        <TextField
          placeholder='Enter Your Query'
          label="Message"
          multiline
          fullWidth
          rows={4}
          maxRows={4}
          sx={{marginTop:"1.5rem"}}
        />

        <Button variant='contained' color='error'
        sx={{marginTop:"2rem", marginBottom:"1rem"}}
        >Send Message <i className="fas fa-paper-plane ms-2"></i></Button>

              </Card.Body>
            </Card>
          </Col>
        </Row>
       </Container>
       <Footer />    
    </div>
  )
}

export default ContactUs