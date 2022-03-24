import React, { useEffect } from "react";
import Das from "./Das";
import Valera from "./trycontext"
import { useNavigate } from "react-router-dom";


function Home(props){

 
    const history =  useNavigate();

    return(

       
        <div className="image_container">
 
 
              <button onClick={() => history("state" ) } >lsjndln</button>
   

            <img className="image" src="https://trello.com/1/cards/62165b9ba7f370112ea29f3c/attachments/62165b9ea7f370112ea2a657/previews/62165b9ea7f370112ea2a65f/download/React1_(1).png"></img>
        </div>
    )
}




export default Home