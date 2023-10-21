import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link,useNavigate, useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';  
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Scrollbars from 'react-custom-scrollbars-2';


export default function Edit() {
    const params = useParams()
  console.log(params.id,'params')
 const[update,setUpdate]=useState()
 const [single,setSingle]=useState()
 const [index,setIndex]=useState()

  let userId = params.id;
  let nav = useNavigate()

  useEffect(()=>{
    const newOne=JSON.parse(localStorage.getItem("contact"))
    setUpdate(newOne);
    let Onevalue=newOne.find((i)=>i.id==userId)
    console.log(Onevalue,'Onevalue')
    setSingle(Onevalue);    
    // console.log(Onevalue,"single")
    const UserIndex = newOne.findIndex((e)=>e.id==userId);
    setIndex(UserIndex)
    console.log(index)
  },[])
  const Up=(e)=>{
    setSingle({...single,[e.target.name]:e.target.value})
  }
  console.log(single)
  console.log(update,"update")


  const handleSubmit= async()=>{
    const updatedData = [...update];
    updatedData.splice(index,1,single);
    localStorage.setItem("contact",JSON.stringify(updatedData))
    await nav("/Table")
  }

  const trigger = useScrollTrigger();

  return (
    <div style={{marginLeft:500 ,backgroundImage:'url("https://img.freepik.com/premium-photo/wooden-block-with-symbol-telephone-email-address-website-page-contact-us-e-mail-marketing-concept-3d-rendering_20693-752.jpg?w=1060")', backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '600px',width:"950px",borderRadius:'25px'}} > 
           <Slide in={!trigger}>
        
    <Container component="main" maxWidth='lg'  >
      <CssBaseline />
      <Scrollbars style={{ width: 490, height: 550,marginTop:"2%" ,marginLeft:'20%'}}>
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          
        }}
      >
        <Avatar  sx={{ m: 1, bgcolor: 'secondary.main',marginTop:'8%' }}>
        </Avatar>
        <Typography component="h1"  variant="h5" color='GrayText'>
        <b><i> EDIT CONTACT</i></b>
        </Typography  ><br />
        
          <Grid container spacing={2} >
            <Grid item xs={2} sm={6}>
              <TextField   value={single?.firstName} onChange={Up} name="firstName" required fullWidth id="firstName" label="First Name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth id="lastName" value={single?.lastName} onChange={Up} label="LastName" name="lastName" />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="phone"  value={single?.phone} onChange={Up} label="Phone Number" name="phone" />
            </Grid>
            <Grid item xs={12}>
              <TextField  required  fullWidth  name="email"  value={single?.email} onChange={Up}  label="Email Address"   id="email"  />
            </Grid>
            <Grid item xs={12}>
              <TextField  required  fullWidth  multiline name="note"  value={single?.note} onChange={Up}  label="Note"   id="note"  />
            </Grid>
            
          </Grid>
          <Button type="submit" fullWidth variant="contained" onClick={handleSubmit} sx={{ mt: 3, mb: 2 }}> Edited </Button>

         <Link to='/Table'> <Button  style={{width:"488px", height:"35px"}} variant="contained" >View the Contacts</Button> </Link>
     
        </Box>
    </Scrollbars>
    </Container>

    </Slide>

  </div>
  )
}
