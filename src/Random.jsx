import React, { useState } from 'react'
// useState is a react hook that is called anytime there's a change to a specific variable.
// It comes with a function that is used to update the value of the useState. 

function Random() {
  let [num,setNum] = useState(0)
  let [myColor,setMycolor] = useState('red')
  let [move,setMove] = useState('-200px')

  function coco() {
    setNum(num + 1)
  }
  function joe () {
    setNum(num-1)
  }

  function bgChanger() {
    if (myColor == "red") {
      setMycolor("blue")
    } else {
      setMycolor("red")
    }
  }
  function changer() {
    if(move=="-200px") {
      setMove('0px')
    } else {
      setMove('-200px')
    }
  }

  return (
    <div className=' h-screen'>
      <h1 className=' text-4xl font-bold'>{num}</h1>
      <button onClick={coco} className=' bg-black p-2 text-white rounded-md'>add</button>
      <button onClick={joe} className='bg-black p-2 text-white rounded-md'>minus</button>


      <section className=' h-[200px] w-[200px]' style={{backgroundColor:myColor}}></section>
      <button onClick={bgChanger} className='bg-blue-800 p-2 text-white rounded-md'>minus</button>

      <section className=' h-[200px] duration-300 w-[200px] bg-neutral-600' style={{marginLeft:move}}></section>
      <button onClick={changer} className='bg-blue-800 p-2 text-white rounded-md'>show</button>

 
    </div>
  )
}

export default Random