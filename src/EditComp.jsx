import React, { useEffect, useState } from 'react'

function EditComp({revealModal,selectedUser}) {

    let [formData,setFormData] = useState({
        firstName:"",
        lastName: "",
        email: "",
        role: "",
    })

    useEffect(()=>{
        if (selectedUser) {
            setFormData({
                firstName:selectedUser.firstName,
                lastName: selectedUser.lastName,
                email: selectedUser.email,
                role: selectedUser.role
            })
        }
    },[selectedUser])

    let handleChange =(vado)=>{
        // console.log(`${vado.target.name} : ${vado.target.value}`)
        setFormData({...formData, [vado.target.name]:vado.target.value})
    }

    let handleUpdate = async (e)=>{
        e.preventDefault()
        try {
            let response = await fetch(`http://localhost:3500/api/user/${selectedUser._id}`,{
                method:"PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials:"include",
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
    <div className=' h-screen bg-[#0009] grid place-items-center absolute w-full'>
        <button onClick={revealModal} className=' bg-white rounded-full w-[40px] h-[40px] absolute right-[100px] top-[20px] cursor-pointer'>❌</button>
        <section className=' min-h-[60vh] w-[40%] bg-white p-3 rounded-md'>
            <h1 className=' text-4xl text-center font-extrabold'>Edit User</h1>
            <form onSubmit={handleChange} className=' flex flex-col gap-3.5'>
            <label className=' flex flex-col gap-2 font-semibold'>
                firstName
                <input type="text" value={formData.firstName} name='firstName' className=' p-2 border-lime-800 border-solid rounded-md border' onChange={handleChange}/>
            </label>
            <label className=' flex flex-col gap-2 font-semibold'>
                lastName
                <input type="text" value={formData.lastName} name='lastName' className=' p-2 border-lime-800 border-solid rounded-md border' onChange={handleChange}/>
            </label>
            <label className=' flex flex-col gap-2 font-semibold'>
                email
                <input type="email" value={formData.email} name='email' className=' p-2 border-lime-800 border-solid rounded-md border' onChange={handleChange}/>
            </label>
             <label className=' flex flex-col gap-2 font-semibold'>
                Role
                <input type="text" value={formData.role} name='role' className=' p-2 border-lime-800 border-solid rounded-md border' onChange={handleChange}/>
            </label>
            <button onClick={handleUpdate} className=' bg-lime-800 font-semibold text-white text-2xl p-2 rounded-sm cursor-pointer'>update</button>
        </form>
        </section>
    </div>
  )
}

export default EditComp