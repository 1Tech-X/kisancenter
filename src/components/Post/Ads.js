import React from 'react'
import './yojna.css'
import { Image } from 'react-bootstrap'
const Ads = () => {
  return (
    <div className='ads '>
<div className="card"><img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
    <div className="info">
      <h1>Mountain</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>Read More</button>
    </div>
  </div>
  <Image fluid classNamemt="mt-2" src="https://storage.googleapis.com/website-production/uploads/2023/01/liveplan-banner-ad-example.png" />
    </div>
  )
}

export default Ads