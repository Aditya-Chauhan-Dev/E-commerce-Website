import React from 'react'
import { Globalcontext } from '../context/ProductContext'
import Product from '../component/homeComponents/product/Product';

function Products() {
  const {isLoading,products}=Globalcontext();

  
  if(isLoading){
      return <div className='text-4xl px-15 py-10'>......Loading</div>
    }
  
  
  return (
  <div className='flex flex-col items-center'> 
    <div className='w-full py-4 px-4'>
      <div className='flex flex-col'>
        <h2 className='title-line '>Our Products</h2>
      </div>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-20 lg:gap-20'>
      {products.map((curElm)=>{
        return <Product key={curElm.id}{...curElm} />
      })}
    </div>
  </div>
  )
}

export default Products
