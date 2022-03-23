import { useEffect, useRef, useState } from "react"


function Onetask({name, del, change}){

    let [inputstate, setInputstate] = useState(true)

    let toggle = () => {
    inputstate ? setInputstate(false) : setInputstate(true)
    }



   

    return(
    <div className="flexcontainer">
    {inputstate ? <p>{name}</p> : <input autoFocus className="input" onChange={(e) => change(e, name)} value = {name}></input> }
    <div >
    <p className="inline" onClick={ () => toggle()}> 🙉 </p>   
    <p className="inline" onClick={ () => del(name)}>❌</p>
    
    </div>
    </div>
    )
}


export default Onetask