import React, { useContext } from 'react'
import { MyContext } from './EmmaText'

function Row() {

  let {theme} = useContext(MyContext)
  

  return (
    <div className={` duration-500 h-[400px] ${theme == true ? "bg-indigo-700" : "bg-indigo-300"}`}></div>
  )
}

export default Row