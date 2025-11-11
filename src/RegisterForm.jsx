import React, { useContext, useState } from 'react'
import { WinnerContext } from './EmmaText'

function RegisterForm() {
    let [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })

    let {theme} = useContext(WinnerContext)

    let handleChange =(vado)=>{
        // console.log(`${vado.target.name} : ${vado.target.value}`)
        setFormData({...formData, [vado.target.name]:vado.target.value})
    }

    let handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            let response = await fetch("http://localhost:3500/api/user",{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            let data = await response.json()
            console.log(data)

        } catch (error) {
            alert("Internal server error")
            console.log(error)
        }
    }




  return (
    <div className={` h-screen grid place-items-center ${theme ? " bg-neutral-400 text-neutral-700" : " bg-black text-white"} duration-300 gap-8 content-center`}>
        <h1 className=' text-4xl font-bold'>Register Form</h1>
        <form onSubmit={handleSubmit} className=' flex flex-col gap-3.5'>
            <label className=' flex flex-col gap-2 font-semibold'>
                firstName
                <input type="text" name='firstName' className=' p-2 border-lime-300 border-solid rounded-md border text-white' onChange={handleChange}/>
            </label>
            <label className=' flex flex-col gap-2 font-semibold'>
                lastName
                <input type="text" name='lastName' className=' p-2 border-lime-300 border-solid rounded-md border text-white' onChange={handleChange}/>
            </label>
            <label className=' flex flex-col gap-2 font-semibold'>
                email
                <input type="email" name='email' className=' p-2 border-lime-300 border-solid rounded-md border text-white' onChange={handleChange}/>
            </label>
            <label className=' flex flex-col gap-2 font-semibold'>
                Password
                <input type="password" name='password' className=' p-2 border-lime-300 border-solid rounded-md border text-white' onChange={handleChange}/>
            </label>
            <button className=' bg-lime-300 font-semibold text-black text-2xl p-2 rounded-sm cursor-pointer'>sign-up</button>
        </form>
    </div>
  )
}

export default RegisterForm