import React, { useEffect } from 'react'
import { Globalcontext } from '../../../context/ProductContext'
import Product from '../product/Product';

const TrandingItems = () => {
    const {isLoading,isRated}= Globalcontext();

    if(isLoading){
      return <div>......Loading</div>
    }

  return (
    <div className='flex flex-col items-center py-20 gap-5'>
      <div className='flex flex-col'>
        <h2 className='title-line'>Top Selling Products</h2>
      </div>
      <div className='highrate flex gap-5 flex-wrap lg:pl-6 '>
        {isRated.map((curElm)=>{
          return <Product key={curElm.id}{...curElm} />
        })}
      </div>
    </div>
  )
}

export default TrandingItems
