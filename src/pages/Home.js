import React from 'react'
import TopHeader from '../components/TopHeader/TopHeader'
import MidHeader from '../components/MidHeader/MidHeader'
import { Container } from 'react-bootstrap'
import NavbarMenu from '../components/NavbarMenu/NavbarMenu'
import Footer from '../components/Footer/Footer'
import News from '../components/News/News'
import OurServices from '../components/OurServices/OurServices'
import Hero from '../components/Hero/Hero'
const Home = () => {
  return (
    <div>
        <TopHeader />
        <MidHeader />
        <NavbarMenu />
        <Container>
          <Hero />
          <News />
          <OurServices />
       </Container>

       <Footer />
    </div>
  )
}

export default Home