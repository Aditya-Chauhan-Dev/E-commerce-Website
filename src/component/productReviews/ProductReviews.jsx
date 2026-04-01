import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

function ProductReviews({reviews=[]}) {
    console.log(reviews);
    
    
    
  return (
    <div className='flex flex-wrap justify-center gap-4 w-full lg:justify-evenly '>
        {reviews.map((reviews,index)=>{
            return <div key={index} className='flex flex-col border-2 rounded-xl p-2 items-start gap-3'>
                <div className='flex items-center gap-2'>
                    <FaRegUserCircle size={25} />
                    <p className='text-xl font-semibold underline'>{reviews.reviewerName}</p>
                </div>
                <p className='text-sm'>{reviews.comment}</p>
                <p>{reviews.rating}</p>
            </div>
        })}
    </div>
  )
}

export default ProductReviews
