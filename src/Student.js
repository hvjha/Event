import React from 'react'

export default function Student(prop) {
    console.log(prop.name)
  return (
    <div style={{backgroundColor:"cyan",margin:15,padding:10}}>
      <h1>Hello {prop.name}</h1>
      {/* <h2>Email: {prop.email}</h2>
      <h4>Address: {prop.other.address}</h4>
      <h5>Mob: {prop.other.mob}</h5> */}
    </div>
  )
}
