import React, { useEffect, useState } from 'react'

function Wrap() {
    let [holdData,setHoldData] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>setHoldData(json))
    })

  return (
    <div className=' min-h-screen bg-black grid grid-cols-5 gap-2.5'>
       {
        holdData.map((item)=>(
            <div className='  bg-gray-300 rounded-md p-1'>
                <div className=' bg-black p-2 grid place-items-center'>
                    <img src={item.image} className=" h-[150px] w-full" />
                </div>
                <h2 className=' text-[13px] whitespace-nowrap overflow-hidden text-ellipsis'>{item.title}</h2>
                <p className=' font-bold'>${item.price}</p>
            </div>
        ))
       }
        
    </div>
  )
}

export default Wrap