import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

export default function Form() {
  const nav = useNavigate();

  // Initialize the state
  let initialValue;
  if (localStorage.getItem('contact') === null) {
    initialValue = [];
  } else {
    initialValue = JSON.parse(localStorage.getItem('contact'));
  }

  const [value, setValue] = useState(initialValue);
  const [data, setData] = useState([]);
  const [table, setTable] = useState({});
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (e) => {
    const newPhoneNumber = e.target.value;
    const isDuplicate = value.some((contact) => contact.phone === newPhoneNumber);
    if (isDuplicate) {
      const duplicateContact = value.find((contact) => contact.phone === newPhoneNumber);
      setPhoneError(`Phone number ${newPhoneNumber} already exists for ${duplicateContact.firstName} ${duplicateContact.lastName}`);
    } else if (!/^\d{10}$/.test(newPhoneNumber)) {
      setPhoneError('Invalid phone number. Must be 10 digits.');
    }else {
      setPhoneError('');
    }
    setTable({ ...table, [e.target.name]: newPhoneNumber });
  }

  const Item=(e)=>{
    //   console.log({[e.target.name]:e.target.value})

    setTable({...table,[e.target.name]:e.target.value})
  }

  const Insert = () => {
    
    if (phoneError) {
      alert('Phone number must be unique'); 
      return;
    }
    const newId = value.length === 0 ? 1 : value[value.length - 1].id + 1;
    let user = {
      id: newId,
      ...table
    }
    const newValue = [...value, user];
    setData(newValue);
    localStorage.setItem('contact', JSON.stringify(newValue));
    nav('/Table');
  }

  const trigger = useScrollTrigger();

  return (
    <div style={{ marginLeft: "500px" ,backgroundImage:'url("https://img.freepik.com/premium-photo/wooden-block-with-symbol-telephone-email-address-website-page-contact-us-e-mail-marketing-concept-3d-rendering_20693-752.jpg?w=1060")', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '555px',width:"900px",borderRadius:'25px'}}>
      <Slide in={!trigger}>
        <Container component="main" maxWidth='sm'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main',marginTop:'10%' }}></Avatar>
            <Typography component="h1" color='GrayText' variant="h5">
              <b><i> ADD CONTACT</i></b>
            </Typography><br /><br />
            <Grid container spacing={2}>
              <Grid item xs={2} sm={6}>
                <TextField autoComplete="given-name" onChange={(e) => Item(e)} name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="lastName" onChange={(e) => Item(e)} label="Last Name" name="lastName" autoComplete="family-name" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="phone" onChange={handlePhoneChange} label="Phone Number" name="phone" autoComplete="phone" helperText={phoneError}  error={!!phoneError}/>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="email" onChange={(e) => Item(e)} label="Email Address" id="email" autoComplete="email" />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" onClick={Insert} sx={{ mt: 3, mb: 2 }}> Save </Button>
            <Link to='/Table'><Button style={{ width: "550px", height: "35px" }} variant="contained">View the Contacts</Button></Link>
          </Box>
        </Container>
      </Slide>
    </div>
  );
}