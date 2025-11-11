import React, { useRef, useState } from 'react'

function SalesApp() {
    let [price1,setPrice1] = useState('')
    let [cost1,setCost1] = useState('')

    let qty1 = useRef()

    let forPrice1 =()=>{
        if (price1 == '') {
            setPrice1(2000)
        } else {
            setPrice1('')
        }
    }

    function forCost1() {
        setCost1(price1 * qty1.current.value)
    }

  return (
    <div>
        <table className=' border-2 border-black'>
            <tr  className=' border-2 border-black'>
                <th className=' border-2 border-dashed border-black'>Items</th>
                <th className=' border-2 border-dashed border-black'>Price</th>
                <th className=' border-2 border-dashed border-black'>Quantity</th>
                <th className=' border-2 border-dashed border-black'>Cost</th>
            </tr>
            <tr  className=' border-2 border-black'>
                <td className=' border-2 border-dashed border-black'><input type="checkbox" onClick={forPrice1}/> Bag</td>
                <td className=' border-2 border-dashed border-black'><input type="number" value={price1} disabled/></td>
                <td className=' border-2 border-dashed border-black'><input type="number" ref={qty1} onInput={forCost1}/></td>
                <td className=' border-2 border-dashed border-black'><input type="number" value={cost1}/></td>
            </tr>
        </table>

    </div>
  )
}

export default SalesApp