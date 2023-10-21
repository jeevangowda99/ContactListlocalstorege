import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import{Button} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import View from './View';
import Delete from './Delete';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Scrollbars from 'react-custom-scrollbars-2';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const style1 = {
  position: 'absolute',
  marginTop:'5%',
  marginLeft:'50px',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundImage:'url("https://img.freepik.com/free-photo/overhead-view-alarm-clock-pencil-with-laptop-lily-valley-blue-office-desk_23-2148178668.jpg?size=626&ext=jpg&ga=GA1.1.1110679009.1696783771&semt=ais")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:'25px',
  
  p: 4,
};
const style2 = {
  position: 'absolute',
  marginTop:'5%',
  marginLeft:'500px',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundImage:'url("https://img.freepik.com/free-photo/overhead-view-alarm-clock-pencil-with-laptop-lily-valley-blue-office-desk_23-2148178668.jpg?size=626&ext=jpg&ga=GA1.1.1110679009.1696783771&semt=ais")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:'25px',
  
  p: 4,
};
const style3 = {
  position: 'absolute',
  marginTop:'5%',
  marginLeft:'950px',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundImage:'url("https://img.freepik.com/free-photo/overhead-view-alarm-clock-pencil-with-laptop-lily-valley-blue-office-desk_23-2148178668.jpg?size=626&ext=jpg&ga=GA1.1.1110679009.1696783771&semt=ais")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:'25px',
  
  p: 4,
};




export default function Table() {


    const [local,setLocal]=useState([]);

    useEffect(()=>{
        const item =JSON.parse(localStorage.getItem("contact"))
        if(item){
        setLocal(item)
        }
    },[])

    const [open, setOpen] = React.useState(false);
    const[selectedUser,setSelectedUser]=useState('')

  const handleOpen = (item) =>{

  setOpen(true);
  // console.log(item)
  setSelectedUser(item)

  console.log(selectedUser)
}

  const handleClose = () => setOpen(false);
  const [close, setClose] = useState(false);

  const handledelete = (item) =>{
    setClose(true);
    setSelectedUser(item)
   }
   const handleClose1 = () => setClose(false);


   const trigger = useScrollTrigger()
   const [searchTerm, setSearchTerm] = useState('');

  

  const filteredContacts = local.filter((item) => {
    return item.firstName && item.firstName.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  return (
    <div style={{backgroundImage:'url("https://img.freepik.com/free-photo/customer-service-business-contact-concept-wooden-cube-block-which-print-screen-letter-telephone-email-address-message_616485-45.jpg?size=626&ext=jpg&ga=GA1.1.1110679009.1696783771&semt=ais")', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',height:'1150px'}}>
      <div style={{marginLeft:"550px",height:"900", marginTop:"0%"}}> 
     
       <Container component="main" maxWidth='lg' >
        <Slide in={!trigger}>
         <Card sx={{   backgroundImage:'url("https://img.freepik.com/premium-photo/contact-us-icons-modern-wooden-frame-desk-brown-textured-wall-copy-space_136875-2232.jpg?size=626&ext=jpg&ga=GA1.1.1110679009.1696783771&semt=ais")', backgroundRepeat: 'no-repeat',backgroundSize: 'cover', height:'500px',marginTop:'2%',borderRadius:"25px" }}>
           <CardContent>
             <h1 ><i><b style={{color:'white'}}>CONTACTS</b></i></h1><br />
             <Typography variant="h6" color="text.secondary">
             <form style={{width:"300px"}} >
                <input
                  type="search"
                  class="form-control"
                  placeholder="Search "
                  aria-label="Search"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 />
             </form>
            <Scrollbars style={{ width: 890, height: 300,marginTop:"5%" }}>
          <Grid  >
           <table class="table" >
            <tbody >
               {filteredContacts.map((item)=>{
                return(
                 <>
                
                   <tr class="table-primary" >
                     <td><Avatar  sx={{ m: 1, bgcolor: 'secondary.main' }}/></td>
                     <td >{item.firstName} <h6>{item.phone}</h6></td>
                
                     <td>
                       <Button onClick={()=>handleOpen(item)} startIcon={<VisibilityIcon/>} class="btn btn-info m-1" > </Button>
                        <Button  class="btn btn-danger m-1" startIcon={<DeleteIcon/>} onClick={()=>handledelete(item)} ></Button> 
                      </td>  
                   </tr>
                   
                 </>
               )
       })}
    
           </tbody>
         </table>

             </Grid>
      </Scrollbars>

     </Typography>
    </CardContent>
  
      </Card>
    </Slide>

</Container>
<div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box >
          <View  send={selectedUser} close={handleClose}/>
        </Box>
      </Modal>
    </div>
    <Modal
  open={close}
  onClose={handleClose1}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Delete local={local}  setLocal={setLocal} data={selectedUser} del={handledelete} cl={handleClose1}/>

  </Box>
</Modal>



</div>
<div>
{/* <Card sx={style1} >
      <Avatar  sx={{ height:110,width:120, bgcolor: 'secondary.main',marginLeft:"100px" }}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h3>{selectedUser.firstName} {selectedUser.lastName}</h3>
        </Typography>
        <hr />
        <Typography variant="body1" color="text.secondary">
        <table>
          <ul>
          <li>Email:{selectedUser.email}</li>
          </ul>
          <hr />
          <ul>
          <li>Phone:{selectedUser.phone}</li>
          </ul>
          <hr />
          <ul>
          <li>Note:{selectedUser.note}</li>
          </ul>
          <hr />
        </table>
        </Typography>
      </CardContent>
    </Card> */}
   <Card sx={style2} >
      <Avatar  sx={{ height:110,width:120, bgcolor: 'secondary.main',marginLeft:"100px" }}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h3>{selectedUser.firstName} {selectedUser.lastName}</h3>
        </Typography>
        <hr />
        <Typography variant="body1" color="text.secondary">
        <table>
          <ul>
          <li>Email:{selectedUser.email}</li>
          </ul>
          <hr />
          <ul>
          <li>Phone:{selectedUser.phone}</li>
          </ul>
          <hr />
          <ul>
          <li>Note:{selectedUser.note}</li>
          </ul>
          <hr />
        </table>
        </Typography>
      </CardContent>
    </Card>
    {/* <Card sx={style3} > 
      <Avatar  sx={{ height:110,width:120, bgcolor: 'secondary.main',marginLeft:"100px" }}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h3>{selectedUser.firstName} {selectedUser.lastName}</h3>
        </Typography>
        <hr />
        <Typography variant="body1" color="text.secondary">
        <table>
          <ul>
          <li>Email:{selectedUser.email}</li>
          </ul>
          <hr />
          <ul>
          <li>Phone:{selectedUser.phone}</li>
          </ul>
          <hr />
          <ul>
          <li>Note:{selectedUser.note}</li>
          </ul>
          <hr />
        </table>
        </Typography>
      </CardContent>
    </Card> */}
</div>
</div>
  )
}
