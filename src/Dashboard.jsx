import React from 'react'
import { useLocation } from 'react-router-dom'

function Dashboard() {
  let location = useLocation();
  console.log(location)

  return (
    <div className=' min-h-screen bg-gray-100 flex'>
        <nav className=' bg-gray-800 text-white p-4 w-[15%] flex justify-center '>
            <ul className=' flex space-x-4 flex-col gap-4'>
                <li>Home</li>
                <li>Profile</li>
                <li>Settings</li>
            </ul>
        </nav>
        <div className=' p-4'>
            <h1 className=' text-2xl font-bold'>Dashboard</h1>
            <p>Good morning, {location.state}</p>
            <p>Welcome to your dashboard!</p>
        </div>
    </div>
  )
}

export default Dashboard