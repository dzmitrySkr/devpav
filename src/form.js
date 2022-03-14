import React from "react";
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import {  HashRouter, Route, Link, Routes, useLocation, Outlet, useParams, Router,BrowserRouter } from "react-router-dom";
import Login from "./loginform";
import Reg from "./registerform";
import Home from "./home";



function Form(){

return(

    <div className="main">
<BrowserRouter>

        <p className="home_button"><Link to='/'>Home</Link></p>        
       

        {/* <h1>Welcome to my Form</h1>
        <Button type="primary"><Link to='/login'>Login</Link></Button>
        <Button type="primary"><Link to='/reg'>Registration</Link></Button>
         */}

        <Routes>
            <Route path="/" element ={<Home />}/>
            <Route path="login" element={<Login />}/>
            <Route path="reg" element={<Reg />}/>
        </Routes >  
   </BrowserRouter>
    </div>
 
)
}

export default Form;