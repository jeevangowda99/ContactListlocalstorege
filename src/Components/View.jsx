import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundImage:'url("https://img.freepik.com/free-photo/overhead-view-alarm-clock-pencil-with-laptop-lily-valley-blue-office-desk_23-2148178668.jpg?size=626&ext=jpg&ga=GA1.1.1110679009.1696783771&semt=ais")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius:'25px',
    
    p: 4,
  };
export default function View({send,close}) {
  return (
    <Card sx={style}>

  
    <Avatar  sx={{ height:110,width:120, bgcolor: 'secondary.main',marginLeft:"100px" }}/>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        <h3>{send.firstName} {send.lastName}</h3>
      </Typography>
      <hr />
      <Typography variant="body1" color="text.primary">
        <table>
          <ul>
          <li>Email:{send.email}</li>
          </ul>
          <hr />
          <ul>
          <li>Phone:{send.phone}</li>
          </ul>
          <hr />
          <ul>
          <li>Note:{send.note}</li>
          </ul>
          <hr />
        </table>
      </Typography>
    </CardContent>
    <CardActions>
      <Button  onClick={close}  class="btn btn-outline-danger m-1" data-mdb-ripple-color="dark" >Close</Button>
      <Link to={`/Edit/${send.id}`}><Button class="btn btn-outline-secondary m-1" data-mdb-ripple-color="dark" style={{width:"100"}} >Edit</Button></Link>
      
    </CardActions>

  </Card>
  )
}
