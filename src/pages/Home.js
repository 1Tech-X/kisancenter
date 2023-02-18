import React from 'react'
import TopHeader from '../components/TopHeader/TopHeader'
import MidHeader from '../components/MidHeader/MidHeader'
import { Container } from 'react-bootstrap'
import NavbarMenu from '../components/NavbarMenu/NavbarMenu'
import Footer from '../components/Footer/Footer'
import News from '../components/News/News'
import OurServices from '../components/OurServices/OurServices'
import Hero from '../components/Hero/Hero'
import { Post } from '../components/Post/Post'
const Home = (props) => {
  return (
    <div>
        <TopHeader />
        <MidHeader />
        <NavbarMenu     
       />
        <Container>
          <Hero />
          <News />
          <OurServices />
          <Post />
       </Container>

       <Footer />
    </div>
  )
}

export default Home