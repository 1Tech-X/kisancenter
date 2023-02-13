import React from 'react'
import CustomBreadCumb from '../components/CustomBreadCumb/CustomBreadCumb'
import TopHeader from '../components/TopHeader/TopHeader'
import MidHeader from '../components/MidHeader/MidHeader'
import { Container } from 'react-bootstrap'
import NavbarMenu from '../components/NavbarMenu/NavbarMenu'
import Footer from '../components/Footer/Footer'
const AboutUs = () => {
  return (
    <div>
     <TopHeader />
        <MidHeader />
        <NavbarMenu />
        <Container>
        <CustomBreadCumb breadname="About Us" />
       </Container>
       <Footer />

    </div>
  )
}

export default AboutUs