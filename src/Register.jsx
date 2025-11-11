import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Register() {
  let fullName = "Viktor Doe";
  let navigate = useNavigate()
  // let [formData,setFormData] = useState({
  //   fullName:"",
  //   email:"",
  //   password:""
  // })

  let handleSubmit =(e)=>{
    e.preventDefault() 

    navigate('/dashboard', {state: fullName})
  }


  return (
    <div className=" h-screen grid place-items-center content-center gap-2.5">
      <h1 className=' text-3xl font-semibold'>Register Form</h1>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-3'>
        <label className=' flex flex-col gap-2'>
          FullName : 
          <input type="text" name='fullName' className=' bg-black text-white p-2 rounded-sm'/>
        </label>
         <label className=' flex flex-col gap-2'>
          Email : 
          <input type="email" name='email' className=' bg-black text-white p-2 rounded-sm' />
        </label>
         <label className=' flex flex-col gap-2'>
          Password : 
          <input type="text" name='password' className=' bg-black text-white p-2 rounded-sm' />
        </label>
        <button type="submit" className=' bg-black text-white p-3 rounded-md'>Register</button>
      </form>
    </div>
  )
}

export default Register