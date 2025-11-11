import React, { useContext } from 'react'
import { WinnerContext } from './EmmaText'

function About() {
    let {theme} = useContext(WinnerContext)
  

  return (
    <div className={` h-[90vh] duration-300 ${theme == true? " bg-red-200" : " bg-red-700"}`}>
        <h1>This is the About Page</h1>
    </div>
  )
}

export default About