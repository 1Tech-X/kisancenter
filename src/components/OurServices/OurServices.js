import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { serviceapi } from '../../Data/ServiceData';
import './OurServices.css'
import Badge from '@mui/material/Badge';
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
      <Box className="service-main">
        <div className='d-flex mt-2 mb-3'>
          <Typography variant='h5'sx={{fontWeight:"600"}}>OUR REGULAR SERVICES</Typography>
          <Button variant="contained" color="error" sx={{float:"right", marginLeft:"auto"}}>View More</Button>
        </div>
      <OwlCarousel 
        className="owl-carousel owl-theme service-slider"
        {...options} 
                  >
    {serviceapi.map((item)=>{return(<>
      <Card sx={{paddingTop:'20px'}}>
   
      <Stack direction="row" justifyContent={'center'} >

      <Avatar
        alt="Remy Sharp"
        src={item.img}
        sx={{ width: 80, height: 80 }}
      />
      </Stack>
      <Stack direction="row" justifyContent={'center'} mt={3} spacing={2}>
        <Typography variant='subtitle2'>{item.title}</Typography>
      <Badge badgeContent={item.total} color="success" 
 
        sx={{top:"12px"}}
      ></Badge>
      </Stack>
        <CardContent sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Button size="small" >View scheme <i className='fas fa-arrow-right ms-2'></i></Button>
        </CardContent>

    </Card>
    </>)})}
    </OwlCarousel>
          {/* <div className='d-flex'>
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
      </OwlCarousel> */}
       
      </Box>
    </div>
  )
}

export default OurServices