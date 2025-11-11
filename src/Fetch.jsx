import React, { useEffect, useState } from 'react'
// API - Application Programming Interface 
    // - It is what connects the client side and the server (frontend & backend)
// JSON - Javascript Object Notation 
        // -  It is a data format. 

function Fetch() {
    let [holdData,setHoldData] = useState("");

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())            
            .then(json=>setHoldData(json))
    })

  return (
    <div className=' h-[200px] w-[150px] bg-gray-300 rounded-md p-1'>
        <div className=' h-[150px] bg-black grid place-items-center'>
            <img src={holdData.image} className=" h-[80%] w-[80%]" />
        </div>
        <h2 className=' text-[13px] whitespace-nowrap overflow-hidden text-ellipsis'>{holdData.title}</h2>
        <p className=' font-bold'>${holdData.price}</p>
    </div>
  )
}

export default Fetch