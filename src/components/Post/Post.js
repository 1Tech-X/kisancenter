import React from 'react'
import NewsTitle from './NewsTitle';
import NewsThumbnail from './NewsThumbnail';
import { Col, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export const Post = () => {
  return (
    <div>
        <Row className='mt-3 mb-2'>
            <Col  md={4} sm={12} >
            <Card sx={{ maxWidth: 345 }}>
        
      <CardActionArea  >
      <Typography gutterBottom variant="h6" component="div" sx={{padding:'8px'}}>
            Maharashtra Mukhyamantri Kisan Yojana 2023 आरम्भ करेगी सरकार, मिलेंगे हर साल 6000 रुपये
    </Typography>
        <CardMedia
          component="img"
          height="140"
          image="https://cmhelpline.in/wp-content/uploads/2022/09/a6.webp"
          alt="green iguana"
        />
        <CardContent>

          <Typography variant="body2"  color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Col>
            <Col  md={4} sm={12} className="p-0">
                <NewsThumbnail />
            </Col>
            <Col  md={2} sm={12} className="p-0">
                <NewsTitle />
            </Col>
            <Col  md={2} sm={12} className="p-0"></Col>
        </Row>
    </div>
  )
}
