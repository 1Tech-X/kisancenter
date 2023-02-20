import React from 'react'
import CustomBreadCumb from '../components/CustomBreadCumb/CustomBreadCumb'
import TopHeader from '../components/TopHeader/TopHeader'
import MidHeader from '../components/MidHeader/MidHeader'
import { Container, Row, Col, Image } from 'react-bootstrap'
import NavbarMenu from '../components/NavbarMenu/NavbarMenu'
import Footer from '../components/Footer/Footer'
import { Typography } from '@mui/material'
const AboutUs = () => {
  return (
    <div>
     <TopHeader />
        <MidHeader />
        <NavbarMenu />
        <Container>
        <CustomBreadCumb breadname="About Us" />

        <Row>
          <Col md={6}>
            <Image fluid src="images/ab.jpg" />
          </Col>
          <Col md={6}>
          <Typography variant='h3' 
        sx={{fontWeight:"700"}}
        >
          About Us
        </Typography>
            <Typography variant='subtitle' mt="3" >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </Typography>
            <Typography variant='subtitle'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Typography>
          </Col>
        </Row>
       </Container>
       <Footer />

    </div>
  )
}

export default AboutUs