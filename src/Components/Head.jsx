import  React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


export default function Head() {
  return (
    <div >
      
      
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <div class="container-fluid" style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCKmIhnv9i2Q75W_1QRv5ClUMLdOzYVesIg&usqp=CAU")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
    
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        
          <a class="navbar-brand mt-2 mt-lg-0" >
          <Avatar  sx={{ m: 1, bgcolor: 'secondary.main' }}/>
          </a>
          <Typography variant="h4" color="gray" noWrap>
          <i> <b>CONTACT LIST</b></i>
            </Typography>
         
          
        </div>
        <div>
          
        </div>
       
    
        <div class="d-flex align-items-center">
         
          <div style={{fontSize:20}}>
          <th class="navbar-nav me-auto mb-2 mb-lg-0">
          <tr >
            <a class="nav-link" href="/">HOME</a>
            </tr>
            <tr >
            <a class="nav-link" href="/Form">ADD</a>
            </tr>
          
            <tr class="nav-item">
              <a class="nav-link" href="Table">CONTACTS</a>
            </tr>
          </th>
          </div>
    
          <div>
            <a
              class=" px-5 align-items-center "
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="40"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
          </div>
          
        </div>
      </div>
    
    </nav>
        
    
    
        </div>
      );
    }
    