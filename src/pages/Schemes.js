import React from 'react'
import CustomBreadCumb from '../components/CustomBreadCumb/CustomBreadCumb'
import TopHeader from '../components/TopHeader/TopHeader'
import MidHeader from '../components/MidHeader/MidHeader'
import { Container } from 'react-bootstrap'
import NavbarMenu from '../components/NavbarMenu/NavbarMenu'
import Footer from '../components/Footer/Footer'

const Schemes = () => {
  return (
    <div>
        <TopHeader />
        <MidHeader />
        <NavbarMenu />
        <Container>
        <CustomBreadCumb breadname="Schemes" />
       </Container>
       <Footer />
    </div>
  )
}

export default Schemes