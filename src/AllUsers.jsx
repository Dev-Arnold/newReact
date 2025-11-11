import React, { useEffect, useState } from 'react'
import EditComp from './EditComp';

function AllUsers() {
    let [holdUsers,setHoldUsers] = useState([]);
    let [showModal,setShowModal] = useState(false);
    let [selectedUser,setSelectedUser] = useState('')

    useEffect(()=>{
        let fetchUser = async()=>{
            try {
                let response = await fetch('http://localhost:3500/api/user/allusers',{
                    method:"GET",
                    credentials:"include"
                }) 
                let data = await response.json()
                setHoldUsers(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
    },[])

    let handleDelete =async(myId)=>{
        try {
            let response = await fetch(`http://localhost:3500/api/user/${myId}`,{
                method:"DELETE",
                credentials:"include"
            }) 
            let data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    let revealModal =(myUser)=>{
        setShowModal(!showModal)
        setSelectedUser(myUser)
    }

  return (
    <div className=' flex justify-center'>
        <table className=' border-2 border-solid w-[90%]'>
            <thead>
                <tr className=' bg-gray-300'>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    holdUsers.length > 0 ? holdUsers.map((obi,index)=>(
                        <tr className=' bg-gray-600 text-center text-white'>
                            <td>{obi.firstName}</td>
                            <td>{obi.lastName}</td>
                            <td>{obi.email}</td>
                            <td>{obi.role}</td>
                            <td><button onClick={()=> revealModal(obi)} className=' cursor-pointer'>🖊️</button></td>
                            <td><button onClick={()=> handleDelete(obi._id)} className=' cursor-pointer'>🗑️</button></td>
                        </tr>
                    )) : null
                }
            </tbody>
        </table>
        {
            showModal && <EditComp revealModal={revealModal} selectedUser={selectedUser}/>
        }
    </div>
  )
}

export default AllUsers