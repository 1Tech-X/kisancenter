import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { getApp } from '../utils/Helper'
const CustomRouter = () => {
  const Currentapp = getApp()

  return (
    <div>
        <BrowserRouter>
           <Currentapp  />
        </BrowserRouter>
    </div>
  )
}

export default CustomRouter