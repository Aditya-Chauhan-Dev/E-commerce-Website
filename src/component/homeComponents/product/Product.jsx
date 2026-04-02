import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import Formatprice from '../../../Helper/FormatPrice';

function Product(curElm) {
    const{id,title,images,category,price,rating}=curElm
    
  return (
    <NavLink to={`/product/${id}`} >
        <div className='product w-50 border-2 rounded-xl border-[#272727] shadow-[inset_0_8px_30px_#000] flex items-center justify-center'>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-2 py-4 border-b-2 w-full items-center justify-center'>
                    <img src={images[0]} alt={title} className='h-30 w-[50%]' />
                </div>
                <div className='flex justify-between items-center w-full px-2 py-2'>
                    <p>{title}</p>
                    <div className='border rounded-full px-1 flex gap-1 items-center text-sm'>
                        <p>{rating}</p>
                        <p><FaStar className='text-amber-600' /></p>
                    </div>
                </div>
                <div>
                    <Formatprice price={price} />
                </div>
            </div>
        </div>
    </NavLink>
    
  )
}

export default Product
