import { useEffect, useState } from 'react'
import React from 'react'
// useEffect is a react hook that is called anytime there's a change to a specific variable. 
// It is used to run side effects like fetching data, sliders, timers and so on. 
// It's also useful if you want something to run once the component mounts. 
// It has an array of dependencies where you can specify the variable(s) you want the useEffect to depend on.   

function EffectClass() {
    let [count,setCount] = useState(0)
    let [count2,setCount2] = useState([])

    let countIncrease =()=>{
        setCount(count+1)
    }

    let countIncrease2 =()=>{
        setCount2(count2+1)
    }

    useEffect(()=>{
        console.log("Welcome to class")
    },[count2])//array of dependencies

  return (
    <div>
        <h1 className=' text-4xl font-bold'>{count}</h1>
        <button onClick={countIncrease} className=' bg-black p-2 rounded-md text-white cursor-pointer'>click me</button>
        <h1 className=' text-3xl font-bold'>Count 2: {count2}</h1>
        <button onClick={countIncrease2} className=' bg-pink-700 p-2 rounded-md text-white cursor-pointer'>click me</button>
    </div>
  )
}

export default EffectClass