import React from 'react'
import { FaStarHalfAlt, FaStar,FaRegStar } from "react-icons/fa";

function ReviewStars({rating}) {

    const Rating=Array.from({length:5},(elem,index)=>{
        let num=index + 0.5;
        
        return(
            <span key={index}>
                {rating>= index+1?(
                    <FaStar />
                ):rating>= num?(
                    <FaStarHalfAlt />
                ):(
                    <FaRegStar />
                )}
            </span>
        )
    })
    
  return (
    <div className='flex items-center text-amber-600'>
        {Rating}
    </div>
  )
}

export default ReviewStars