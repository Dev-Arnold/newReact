import React, { useRef, useState } from 'react'
import Practice from './Practice'
import Home from './Home'
import Footer from './Footer'
// useRef is a react hook that is used to interact with html elements. It can be used to modify the content of html elements.

function App() {
  
  return (
    <div className=' h-[200px] w-[150px] bg-gray-300 rounded-md p-1'>
      <div className=' h-[150px] bg-black grid place-items-center animate-pulse'></div>
      <h2 className=' text-[13px] whitespace-nowrap overflow-hidden text-ellipsis'></h2>
    </div>
  )
}

export default App