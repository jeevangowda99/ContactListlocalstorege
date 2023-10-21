import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCKmIhnv9i2Q75W_1QRv5ClUMLdOzYVesIg&usqp=CAU")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius:'25px',

    p: 4,
  };

export default function Delete({cl,data, local,setLocal}) {
    const Delete = async(item)=>{
        const newValue = local.filter((i)=>i.id!=item.id)
        console.log(newValue,'nae')
        setLocal(newValue)
        localStorage.setItem("contact",JSON.stringify(newValue));
        await cl()
    }
  return (
    <div>
    <Card sx={style}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        
        </Typography>
        <Typography variant="body2">
         <h6>ARE SURE YOU WANT TO DELETE {data.firstName}?</h6>
        </Typography>
      </CardContent>
      <CardActions>
        <Button  color='success' variant="outlined" onClick={cl}>CLOSE</Button>
        <Button onClick={()=>Delete(data)}  color='warning' variant="outlined" >YES,DELETE</Button>

      </CardActions>
    </Card>
    </div>
  )
}
