import React,{useRef,useState} from 'react'
import $ from "jquery";
import TopHeader from '../TopHeader/TopHeader'
import MidHeader from '../MidHeader/MidHeader'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Footer from '../Footer/Footer'
import CustomBreadCumb from '../CustomBreadCumb/CustomBreadCumb'
import { Card, Container } from 'react-bootstrap'
import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
const Signup = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  // color: theme.palette.text.secondary,
}));
const currencies = [
  {
    value: 0,
    label: 'Business Type',
  },
  {
    value: 'Computer Institute',
    label: 'Computer Institute',
  },
  {
    value: 'CSC Center',
    label: 'CSC Center',
  },
  {
    value: 'saddasd asd',
    label: 'saddasd asd',
  },
  {
    value: 'JXerox Center',
    label: 'Xerox Center',
  },
];
const [name, setName] = useState('');
const [result, setResult] = useState("");

const [msg,setMsg]=useState("")
const handleChange = (e) => {
  e.preventDefault();
    setName(e.target.value);
    
    
    $.ajax({
        type: "POST",
        url: "https://kisancenter.com/backend/registerdomain.php",
        data: {domain: name},
        success(res) {
          
          if(res==='exist'){
            setResult(name+".kisancenter.com already exist");
            setMsg("error")
            
          }
          else{
            setResult(name+".kisancenter.com available");
            setMsg("success");
            
          }
            
        },
    });
};
const {current: reid} = useRef("KISAN" + (Math.random().toString(36).toUpperCase()+'00000000000000000').slice(2, 10))
  return (
    <div>
        <TopHeader />
        <MidHeader />
        <NavbarMenu />
        <Container>
            <CustomBreadCumb breadname="Sign Up" />
            <Typography variant="h4" gutterBottom mt="2" sx={{textAlign:"center", fontWeight:"900"}}>
            MINI WEBSITE REGISTRATION
      </Typography>
      <Divider variant="middle" />
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Item>
            <Typography variant='h6' gutterBottom sx={{textAlign:"center", fontWeight:"600"}}>
              Benefits Mini Webiste
            </Typography>
            <Divider variant="middle" />
             <Typography variant='h6' mt={2} gutterBottom sx={{ fontWeight:"600"}}>
              About Plan
            </Typography>
            <Typography variant='body2'>
            नमस्कार The Ministry of Women and Child Development is implementing the Swadhar Greh Scheme which targets the women victims of difficult circumstances who are in need of institutional support for rehabilitation so that they could lead their life with dignity. The Scheme envisages providing shelter, food, clothing and health as well as economic and social security for these women.
            </Typography>
            <Typography variant='h6' mt={2} gutterBottom sx={{ fontWeight:"600"}}>
              Benefits
            </Typography>
            <Typography variant='body2'>
              The benefit of the component could be availed by women above 18 years of age in the following categories:
            </Typography>
            <ul className='mt-2'>
                                                <li>Women who are deserted and are without any social and economic support;
                                                </li>
                                                <li>Women survivors of natural disasters who have been rendered homeless and are without any social and economic support;
                                                </li>
                                                <li>Women prisoners released from jail and are without family, social and economic support;
                                                </li>
                                                <li>Women victims of domestic violence, family tension or discord, who are made to leave their homes without any means of subsistence and have no special protection from exploitation and/ or facing litigation on account of marital disputes; 
                                                </li>
                                                <li>Trafficked women/girls rescued or run away from brothels or other places where they face exploitation and Women affected by HIV/AIDS who do not have any social or economic support. However such women/ girls should first seek assistance under UJJAWALA Scheme in areas where it is in operation.
                                                </li>
                                                <li>Women affected by domestic violence could stay up to one year. For other categories of women, the maximum period of stay could be up to 3 years. The older women above the 55 years of age may be accommodated for a maximum period of 5 years after which they will have to shift to old age homes or similar institutions.

                                                </li>
                                            </ul>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className='p-3'>
             <Typography variant="subtitle2" mt={2}mb={2} gutterBottom sx={{ fontWeight:"600"}}>
              Business Information <span className='text-danger'>(Fill The Organisation's Information)</span>
            </Typography>

          <TextField
          id="outlined-textarea"
          label="Registration ID"
          placeholder="Placeholder"
          value={reid}
          multiline
          fullWidth
        />
  {/* DropDown Item here */}
  <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="0"
          helperText="Please select Business Type"
          fullWidth
          sx={{
            marginTop:'1.5rem'
          }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          <TextField
          id="outlined-textarea"
          label="Org. Name"
          placeholder="Enter Organisation Name"
          fullWidth
          sx={{
            marginTop:'1.5rem'
          }}
        />
          <TextField
          id="outlined-textarea"
          label="Website Domain"
          placeholder="example.kisancenter.com"
          color={msg}
          fullWidth
          onChange={(event) => handleChange(event)}
          value={ name}
          helperText={result}
          sx={{
            marginTop:'1.5rem'
          }}
        />

          </Card>
        </Grid>
      
     
      </Grid>
    </Box>
        </Container>
        <Footer/>
    </div>
  )
}

export default Signup