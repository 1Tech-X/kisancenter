import React from 'react'
import { Card } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { serviceapi } from '../../Data/ServiceData';
import './OurServices.css'
const OurServices = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ['<i class="fas fa-angle-left " aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>'],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
};
  return (
    <div>
      <Card className='border-danger-2 bg-light service-main'>
        <Card.Body>
          <div className='d-flex'>
            <Card.Title>OUR REGULAR SERVICES</Card.Title>
            <button className='btn btn-sm btn-danger ms-auto'>View More</button>
          </div>
          <OwlCarousel 
        className="owl-carousel owl-theme service-slider"
        {...options} 
                  >
        {serviceapi.map((item)=>{return(<>
        <Link to={item.src}><div className="card sericescard mt-2" >
            <div className="card-body ">
                <div className="cardimg d-flex justify-content-center">
                    <img src={item.img} className="card-img img-fluid " style={{width:"150px"}} alt="" />
                </div>
                <h4 className="card-text text-center">{item.title}</h4>
            </div>
        </div>
        </Link>
        </>)})}
      </OwlCarousel>
        </Card.Body>
      </Card>
    </div>
  )
}

export default OurServices