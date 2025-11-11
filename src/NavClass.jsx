import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NavClass() {
    let [formData,setFormData] = useState({
        fullName:'',
        email:'',
        password:''
    })

    let navigate = useNavigate();

    let handleChange =(boy)=>{
        setFormData({...formData,[boy.target.name]:boy.target.value})
    }

    let handleSubmit =(e)=>{
        e.preventDefault() 
        navigate('/dashboard', {state: formData.fullName})
        console.log(formData)
    }


  return (
    <div className=' bg-black text-white h-screen flex flex-col justify-center items-center gap-5'>
        <h1 className=' text-4xl font-bold'>Register Form</h1>
        <form onSubmit={handleSubmit} className=' flex flex-col gap-3'>
            <label className=' flex flex-col gap-1'>
                Fullname: 
                <input onChange={handleChange} type="text" name="fullName" className=' p-2 rounded-md bg-white text-black' />
            </label>
            <label className=' flex flex-col gap-1'>
                Email: 
                <input onChange={handleChange} type="email" name="email" className=' p-2 rounded-md bg-white text-black' />
            </label>
            <label className=' flex flex-col gap-1'>
                Password: 
                <input onChange={handleChange} type="password" name="password" className=' p-2 rounded-md bg-white text-black' />
            </label>
            <button className=' p-2 rounded-md bg-blue-500 text-white cursor-pointer'>Register</button>
        </form>
    </div>
  )
}

export default NavClass