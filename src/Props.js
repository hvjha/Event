import React, { useState } from 'react'
import Student from './Student'
export default function Props() {
    const [name,setName] = useState("prince")
  return (
    <div>
      <Student name ={name} />
      <button onClick={()=>{setName("Aman")}}>Update Name</button>
      {/* <Student name ={"Harsh"} email="harsh@gmail.com" other={{address:"delhi",mob:123456789}}/> */}
      {/* <Student name ={"Aman"} email="aman@gmail.com"other={{address:"delhi",mob:123456789}}/>
      <Student name ={"Priti"} email="pri@gmail.com"other={{address:"delhi",mob:123456789}}/> */}
    </div>
  )
}
