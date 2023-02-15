import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
export default function NewsTitle(props) {
    return (
        <div>
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="left">
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              {"I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
    </div>
    )
}