import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WinnerContext } from './EmmaText'

function Header() {
  let {toggleTheme} = useContext(WinnerContext) 

  return (
    <div className=" flex justify-around items-center h-[60px] text-white border-b-2 bg-slate-700">
        <h1 className=' text-4xl font-bold'>logo</h1>
        <nav>   
            <ol className=' flex gap-8'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/practice">Practice</Link></li>/
                <li><Link to="/register">register</Link></li>
            </ol>
        </nav>
        <div>
          <button onClick={toggleTheme} className=' bg-black p-2 rounded-xl  cursor-pointer'>dark mode</button>
        </div>
    </div>
  )
}

export default Header