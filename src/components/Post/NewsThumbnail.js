import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Image } from 'react-bootstrap';
import { Button, Typography } from '@mui/material';
export default function NewsThumbnail(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
  
    // color: theme.palette.text.secondary,
  }));
    return (
        <div >
            {/* <div className="w-32 px-2">
                <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTMMnaUjvgKGcAeSiYtZTE7ACAFZQG8Zq6w&usqp=CAU"/>
            </div>
            <div className="font-bold md:text-sm">Gold Worth ₹ 2.03 Crore Seized At Chennai Airport</div> */}
<Paper elevation={2} 
sx={{padding:"5px"}}
>
<div className='d-flex justify-content-end mb-2'>
<Button variant='contained' color='success' size='small'>csc center </Button>
</div>
<Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
  <Grid item xs={4}>
    
    <Image fluid src="https://assets.thehansindia.com/h-upload/2019/10/15/226493-ghmc-2.webp" />
    
  </Grid>
  
  <Grid item xs={8} sx={{padding:"3px"}}>
  
    <Typography variant='subtitle'>सफाई कर्मचारियों के लिए ऋण आधारित योजनाएं - शिक्षा ऋण योजना (ई.एल.एस.)
</Typography>
<Button size='small'>Read More</Button>
  </Grid>
</Grid>
<Stack direction="row" spacing="2" >
            <i className='fas fa-user me-2 ms-2'></i> 
            <Typography variant='subtitle2'> Super Admin</Typography>
            <i className='fas fa-calendar-alt ms-3 me-2'></i>
            <Typography variant='subtitle2'> 02/17/2323</Typography>
            
          </Stack>
</Paper>

        </div>
    )
}