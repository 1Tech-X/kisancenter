import React from 'react'
import TopHeader from '../components/TopHeader/TopHeader'
import MidHeader from '../components/MidHeader/MidHeader'
import { Container } from 'react-bootstrap'
import NavbarMenu from '../components/NavbarMenu/NavbarMenu'
const Home = () => {
  return (
    <div>
        <TopHeader />
        <MidHeader />
        <NavbarMenu />
        <Container>
       </Container>
    </div>
  )
}

export default Home