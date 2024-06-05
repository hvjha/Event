import React, { useState } from 'react'

export default function Formhandle() {
    const [name,setname]=useState("");
    const [tnc,setTnc]=useState(false);
    const [interest,setInterest]=useState("")
    const [printData,setPrintData] = useState(null)
    function getFormData(e){
        console.log(name,interest,tnc)
        e.preventDefault()
        setPrintData({name,interest,tnc})
    }
  return (
    <div>
      <h1>Handle Form</h1>
      <form onSubmit={getFormData}>
      <div>
      <input type="text" placeholder='enter name' onChange={(e)=>setname(e.target.value)}></input>
      </div>
      <div>
        <select onChange={(e)=>setInterest(e.target.value)}>
        <option>Select Option</option>
            <option>Marvel</option>
            <option>DC</option>
            <option>Hrry</option>
        </select>
      </div>
      <div>
      <input type ="checkbox" onChange={(e)=>setTnc(e.target.checked)}></input><span>Accept term and condition</span>
      </div>
        <div>
           <button>Submit</button>
        </div>
      </form>
      {printData && (
        <div>
            <h1>Form Data</h1>
            <p>Name:{printData.name}</p>
            <p>Interest:{printData.interest}</p>
            <p>Terms and condition Accepted:{printData.tnc ? "Yes":"No"}</p>
        </div>
      )}
    </div>
  )
}
