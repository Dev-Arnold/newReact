import React, { useEffect, useState } from "react";

function FetchAll() {
  let [holdData, setHoldData] = useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setHoldData(data));
  },[])



  return (
    <div className=" bg-slate-900 min-h-screen grid grid-cols-5 gap-4">
      {
        holdData.map((item)=>(
          <div className=" ">
            <div className=" bg-white grid place-items-center"><img src={item.image} className="h-[150px]" /></div>
            <h1 className=" text-ellipsis text-white font-medium overflow-hidden whitespace-nowrap">{item.title}</h1>
            <p className=" text-white">${item.price}</p>
          </div>

        ))
      }
    </div>
  );
}

export default FetchAll;
