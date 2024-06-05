import React, { useState } from 'react'

export default function Toggle() {
    const [data,setData]=useState(true)
  return (
    <div>
    {
        data?<h1>Muskaan</h1>:null
    }
      
      {/* <button onClick={()=>setData(false)}>Hide</button>
      <button onClick={()=>setData(true)}>Show</button> */}
      <button onClick={()=>setData(!data)}>Toggle</button>
    </div>
  )
}
