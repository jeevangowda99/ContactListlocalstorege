import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';


export default function Home() {
 
  return (
    <div style={{backgroundImage:'url("https://img.freepik.com/premium-photo/website-internet-contact-us-page-concept-with-phone-chat-email-icons-symbol-telephone-mail-mobile-phone-website-page-contact-us-wide-web-banner-copy-space-blue-background_256259-2730.jpg?size=626&ext=jpg&ga=GA1.1.1110679009.1696783771&semt=ais")', backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
     height: '656px'}}>
    <Box
    sx={{
      width: 900,
      height: 656,
      marginLeft:79,
      // marginTop:'5%',
      backgroundImage:'url("https://st2.depositphotos.com/1560768/5217/i/450/depositphotos_52175461-stock-photo-contact-us-concept-using-female.jpg")',
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover'
      
    }}
  >
             <Link to='/Form'> <Button  style={{width:"300px", height:"45px",marginLeft:"300px", marginTop:'55%'}} class="btn btn-info btn-rounded"><h5>ADD CONTACTS</h5></Button> </Link>

  </Box>

  </div>
      )
}
