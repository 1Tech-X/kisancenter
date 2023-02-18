import React from 'react'
import NewsTitle from './NewsTitle';
import NewsThumbnail from './NewsThumbnail';
import { Col, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';
import {Image} from 'react-bootstrap';
import NewYojna from './NewYojna';
import Ads from './Ads';
export const Post = () => {
  const styles = {
    media: {
       height: 0,
       paddingTop: '56.25%' // 16:9
    },
    card: {
       position: 'relative',
    },
    overlayButton: {
       position: 'absolute',
       top: '140px',
       left: '20px',
     
    }
 }
  return (
    <div>
        <Row className='mt-3 mb-2'>
            <Col  md={4} sm={12} >
            <Card >
        
      <CardActionArea  >
      <Typography gutterBottom variant="h6" component="div" sx={{padding:'8px',fontWeight:"600"}}>
            Maharashtra Mukhyamantri Kisan Yojana 2023 आरम्भ करेगी सरकार, मिलेंगे हर साल 6000 रुपये
    </Typography>
        <CardMedia
          component="img"
          height="140"
          image="https://cmhelpline.in/wp-content/uploads/2022/09/a6.webp"
          alt="green iguana"
        />
        <Button variant='contained' size="small" color="error">CSC center</Button>
        <CardContent>

          <Typography variant="body2"  color="text.secondary">
          महाराष्ट्र में किसानों की बढ़ती हुई आत्महत्या सरकार के सामने एक चिंता का विषय बनी हुई है। जिसके लिए इस समय महाराष्ट्र एवं केंद्र सरकार मिलकर किसानों को आर्थिक रूप से मजबूत बनाकर उन्हें आत्महत्या करने से रोकने के लिए हर मुमकिन प्रयास कर रही है।.....
          </Typography>
          <Stack direction="row" spacing="2" mt={2}>
            <i className='fas fa-user me-2'></i> 
            <Typography variant='subtitle2'> Super Admin</Typography>
            <i className='fas fa-calendar-alt ms-3 me-2'></i>
            <Typography variant='subtitle2'> 02/17/2323</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card style={{marginTop:"15px"}}>
    <Typography variant="subtitle" component="div"  mt={2} sx={{padding:'15px', fontWeight:"600"}}>
    सफाई कर्मचारियों के लिए ऋण आधारित योजनाएं - शिक्षा ऋण योजना (ई.एल.एस.)
    </Typography>
    <CardMedia
          component="img"
          
          image="https://cfb.rabbitloader.xyz/f3rl18pi/rls.t-nw-a28/wp-content/uploads/2022/07/image-307-768x432.png"
          alt="green iguana"
          mt={2}
        />
        <CardContent>
        <Typography variant='subtitle2'>
        केवल आधार कार्ड की सहायता से कोई भी लाभार्थी इस योजना के अंतर्गत अपना नाम खोज सकता है इसके लिए सर्वप्रथम आपको Awas Yojana List की आधिकारिक वेबसाइट@pmaymis.gov.in पर जाना होगा |
        </Typography>
        <Stack direction="row" spacing="2" mt={2}>
            <i className='fas fa-user me-2'></i> 
            <Typography variant='subtitle2'> Super Admin</Typography>
            <i className='fas fa-calendar-alt ms-3 me-2'></i>
            <Typography variant='subtitle2'> 02/17/2323</Typography>
            
          </Stack>
          <Button  size="small" sx={{marginRight:"auto", marginTop:"18px"}} >Read more</Button>
        </CardContent>
    </Card>
            </Col>
            <Col  md={4} sm={12} className="p-0">
                <NewsThumbnail />
                <NewsThumbnail />
                <NewsThumbnail />
                <NewsThumbnail />
                <NewsThumbnail />
              
            </Col>
            <Col  md={2} sm={12} className="p-0">
                <NewsTitle />
                <NewsTitle />
                <NewsTitle />
                <NewsTitle />
                <NewsTitle />
            </Col>
            <Col  md={2} sm={12} className="p-0">
              <Ads />
            </Col>
        </Row>
        <Container>
          <Image fluid className='w-100 mt-3 mb-3' src="https://purainfotech.com/Advertisements/2.jpg"  alt="ads" />
        </Container>
        <NewYojna />
    </div>
  )
}
