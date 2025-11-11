import React, { useContext } from 'react'
import { WinnerContext } from './EmmaText'

function Practice() {
  let {theme} = useContext(WinnerContext)
  console.log("theme is",theme)

  return (
    <div className={` h-[90vh] duration-300 ${theme == true? " bg-lime-200" : " bg-lime-700"}`}>Practice</div>
  )
}

export default Practice