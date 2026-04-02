import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { Link } from 'react-router-dom';

function AddToCartBtn({stock}) {
    // console.log(stock);

    const [quantity, setQuantity] = useState(1)

    const increase=()=>{
        if(stock>quantity){
            setQuantity(quantity+1)
        }
    }

    const decrease=()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }
    
  return (
    <div className='flex flex-col w-fit items-center'>
        <div className='flex items-center gap-3 text-lg'>
            <FaPlus onClick={()=>{increase()}} />
            <p>{quantity}</p>
            <FaMinus onClick={()=>{decrease()}} />
        </div>
        <Link to='/cart'>
          <button className='CartBtn rounded py-1 px-3 border border-gray-700 lg:text-lg bg-[#1f242b] text-[#fff]'>Add to cart</button>
        </Link>
    </div>
  )
}

export default AddToCartBtn
