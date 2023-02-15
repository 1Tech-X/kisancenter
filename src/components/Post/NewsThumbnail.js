import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
export default function NewsThumbnail(props) {
    return (
        <div >
            {/* <div className="w-32 px-2">
                <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTMMnaUjvgKGcAeSiYtZTE7ACAFZQG8Zq6w&usqp=CAU"/>
            </div>
            <div className="font-bold md:text-sm">Gold Worth ₹ 2.03 Crore Seized At Chennai Airport</div> */}

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
    
      <CardMedia
          component="img"
          height="90"
          image="https://cfb.rabbitloader.xyz/rkrln1vm/rls.t-nw-a28/wp-content/uploads/2020/10/YSR-JALAKALA-150x150.jpg"
          alt="green iguana"
        />
        <ListItemText
          primary="Brunch this weekend?"
          sx={{marginLeft:'5px'}}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
    
    <CardMedia
        component="img"
        height="90"
        image="https://cfb.rabbitloader.xyz/rkrln1vm/rls.t-nw-a28/wp-content/uploads/2020/10/YSR-JALAKALA-150x150.jpg"
        alt="green iguana"
      />
      <ListItemText
        primary="Brunch this weekend?"
        sx={{marginLeft:'5px'}}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
              
            >
              Ali Connors
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
    </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
    
      <CardMedia
          component="img"
          height="90"
          image="https://cfb.rabbitloader.xyz/rkrln1vm/rls.t-nw-a28/wp-content/uploads/2020/10/YSR-JALAKALA-150x150.jpg"
          alt="green iguana"
        />
        <ListItemText
          primary="Brunch this weekend?"
          sx={{marginLeft:'5px'}}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </div>
    )
}