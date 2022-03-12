import React, { Fragment } from "react";
import {Lala, App } from './App.js'


function Dialogs (props){
   
    return(
        <Lala.Consumer>
           
      {value => 
      
        <p>Hello from {value}</p>
     
      }
       
         </Lala.Consumer>
    )
   
}


export {Dialogs};