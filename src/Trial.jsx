import React from 'react'

function Trial() {

    let myCars = [
        {
            brand:"Toyota",
            model:2023,
            price:2000000
        }, 
        {
            brand:"Volvo",
            model:2024,
            price:1200000
        }, 
        {
            brand:"Mercedes",
            model:2026,
            price:70000000
        }
    ]

  return (
    <div>
        <ol className=' list-decimal list-inside'>
            {
                myCars.map((ada)=>(
                    <li>The car is {ada.brand} and the model is {ada.model}</li>
                ))
            }
        </ol>

    </div>
  )
}

export default Trial