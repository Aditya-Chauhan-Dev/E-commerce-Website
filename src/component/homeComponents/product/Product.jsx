import React from 'react'
import { NavLink } from 'react-router-dom';
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
                    <p className='border rounded-full px-1 flex gap-1 items-center text-sm'>{rating}
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                    </p>
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
