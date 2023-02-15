import React from 'react'
import MidHeader from '../components/MidHeader/MidHeader'
import TopHeader from '../components/TopHeader/TopHeader'
import NavbarMenu from '../components/NavbarMenu/NavbarMenu'
import Footer from '../components/Footer/Footer'
import { Container } from 'react-bootstrap'
export const UserHome = () => {
  return (
    <div>
        <TopHeader />
        <MidHeader />
        <NavbarMenu />
        <Container>
        <h1 className='text-center mt-5'>Hello prashant.localhost.com</h1>
        </Container>
        <Footer />
        
    </div>
  )
}

export const UserHome1 = () => {
    return (
      <div>
        <h1 className='text-center mt-5'>HIIII, example.localhost.com</h1>
        </div>
    )
  }

  export const UserHome2 = () => {
    return (
      <div>
        <TopHeader />
        <MidHeader />
        <NavbarMenu />
        <h1 className='text-center mt-5'>datta. ljsqjkjqsnsql</h1>
        </div>
    )
  }

  export const UserHome2about = () => {
    return (
      <div>
        <TopHeader />
        <MidHeader />
        <NavbarMenu />
        <h1 className='text-center mt-5'>about here</h1>
        </div>
    )
  }
