import React from 'react'
import './News.css'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { newsapi } from '../../Data/NewsData';
const News = () => {

  return (
    <div className="trending-light">
        <Marquee
        pauseOnHover={true}
        gradient={false}
        speed={60}
        >
            {newsapi.map((item)=>{return(<>
        <Link to={item.link}><h5 className='post-title ms-5'>{item.headline}</h5></Link>
        </>)})}
        </Marquee>
    </div>
  )
}

export default News