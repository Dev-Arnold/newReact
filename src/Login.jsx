import React, { useState } from 'react'

function Login() {
    let [formData,setFormData] = useState({
        email:"",
        password:""
    })

    let handleChange =(vado)=>{
        // console.log(`${vado.target.name} : ${vado.target.value}`)
        setFormData({...formData, [vado.target.name]:vado.target.value})
    }

    let handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            let response = await fetch("http://localhost:3500/api/user/login",{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials:"include",
                body: JSON.stringify(formData)
            })

            let data = await response.json()
            alert(data.message)

        } catch (error) {
            alert("Internal server error")
            console.log(error)
        }
    }




  return (
    <div className=' h-screen grid place-items-center bg-black text-white gap-8 content-center'>
        <h1 className=' text-4xl font-bold'>Login Form</h1>
        <form onSubmit={handleSubmit} className=' flex flex-col gap-3.5 '>
            <label className=' flex flex-col gap-2 font-semibold'>
                email
                <input type="email" name='email' className=' p-2 border-lime-300 border-solid rounded-md border text-white' onChange={handleChange}/>
            </label>
            <label className=' flex flex-col gap-2 font-semibold'>
                Password
                <input type="password" name='password' className=' p-2 border-lime-300 border-solid rounded-md border text-white' onChange={handleChange}/>
            </label>
            <button className=' bg-lime-300 font-semibold text-black text-2xl p-2 rounded-sm cursor-pointer'>sign-in</button>
        </form>
    </div>
  )
}

export default Login