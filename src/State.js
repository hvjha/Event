import React,{useState} from 'react'

export default function State() {
    const [dat,setDat] = useState("priti")
    const [data,setData] = useState(0)
    function updateData(){
        setDat("Harsh Jha")    
    }
    function handleData(){
        setData(data+1)
    }
  return (
    <div>
      <h1>{dat}</h1>
      <button onClick={updateData}>Update Data</button>
      <h2>{data}</h2>
      <button onClick={handleData}>Update Data</button>
    </div>
  )
}
