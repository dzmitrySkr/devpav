import React, { useEffect, useRef, useState } from "react";






function Newcomp ({name, callback}) {


    callback(545)

    
    useEffect( ()=>{
        sss.current.focus()
    } )

    let sss = useRef()



    useEffect(()=>{
        return () => {console.log('willUnmdmcln')}
    })

    let [count, setCount] = useState(' ')

    let ddd = (e) => {
        e.target.value !== 'dima' ? setCount(e.target.value) : setCount('jabcajb')
    }
   
        return(
            <>
                <div> {count} </div>
                <input ref = {sss} onChange={ (e) => ddd(e)  }  value ={count} />
            </>
        )
    }
    


export default Newcomp