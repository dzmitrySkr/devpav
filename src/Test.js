import axios from "axios";
import React, { useState, useEffect } from "react";
import {Dialogs} from './Test2.js'

// class Newclass extends React.Component{
//     constructor(props){
//         super(props)

//     this.state = {smth: []}
//     }

//     componentDidMount(){
//        axios.get('https://jsonplaceholder.typicode.com/posts')
//        .then(resp => {
//            this.setState({smth : resp.data})
//            console.log(resp.data)}
//        )      
//     }

//     render(){
//         console.log(this.state.smth);
//         let {smth} = this.state
//     return (
//         <div>Hello people <br/>
//          {
//          smth.length ?
//          smth.map(obg => <div key = {obg.id}> {obg.title} </div>) :
//          null  
//          } 
//         </div> 
//     )
// }
// }
  

function Mynewclass({value, sett}){

        let [bananas, setBananas] = useState(["банан ","Огурец ","тыква "]);

       
    return(
       
        <ul className = 'hood'>
            <li>{bananas[0]}</li>
            <li>{bananas[1]}</li>
            <li>{bananas[2]}</li>
            <li><Dialogs/></li>
        </ul>
    )
}


  export default Mynewclass;