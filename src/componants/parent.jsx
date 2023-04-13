import React, { useState } from 'react'
//import the Childmemo componant
import {Childmemo} from './child';

function Parent() {
    const[count,setcount]=useState(0)
    const[chanel,setchanel]=useState("viswa")
    console.log("parent renderd");
  return (
    <div>
    <h2>{count}</h2>
    <button onClick={()=>{setcount(prevcount=>prevcount+1)}}> increment</button>
    <button onClick={()=>{setchanel("change chanel")}}> change</button>
    <Childmemo chanel={chanel}/>
    
    </div>
  )
}

export default Parent