import React from 'react'
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import Table from './Table'
import { createTheme } from '@mui/material/styles';
import View from './View'
import Edit from './Edit'
import Delete from './Delete'
import Head from './Head'

const defaultTheme = createTheme();

export default function Router() {
  return (
     <div  style={{backgroundImage:'url("https://img.freepik.com/premium-photo/website-internet-contact-us-page-concept-with-phone-chat-email-icons-symbol-telephone-mail-mobile-phone-website-page-contact-us-wide-web-banner-copy-space-blue-background_256259-2730.jpg?size=626&ext=jpg&ga=GA1.1.1110679009.1696783771&semt=ais")', backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
     height: '739px'}}>
   
    <BrowserRouter>
    <Head/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/Head' element={<Head/>}/>
            <Route exact path='/Form' element={<Form/>}/>
            <Route exact path='/Table' element={<Table/>}/>
            <Route exact path='/View' element={<View/>}/>
            <Route exact path='/Edit/:id' element={<Edit/>}/>
            <Route exact path='/Delete' element={<Delete/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}
