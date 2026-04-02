import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Globalcontext } from '../../context/ProductContext';
import Navigator from '../navigationPage/Navigator';
import FormatPrice from '../../Helper/FormatPrice';
import ProductImage from '../productImages/ProductImage';
import ProductReviews from '../ProductReviews/ProductReviews';
import ReviewStars from '../startRating/ReviewStars';
import AddToCartBtn from '../addToCartBtn/AddToCartBtn';

function SingleProduct() {
    const {getsingleProduct,isSingleLoading,oneProduct}=Globalcontext();
    // const API="https://fakestoreapi.com/products"
    const API="https://dummyjson.com/products"
    const {id}=useParams();
    const {id:index,title,description,category,images=[],tags=[],rating,price,brand,warrantyInformation,shippingInformation,availabilityStatus,reviews=[],returnPolicy,discountPercentage,stock}=oneProduct
    const discount=discountPercentage/100

    

    useEffect(() => {
        getsingleProduct(`${API}/${id}`)
    },[id])

    if(isSingleLoading){
      return <div>......Loading</div>
    }
    
  return (
    <div className='px-5 lg:px-10 items-center'>
      <Navigator title={title} />

      {/* Product Info */}
      <div className='lg:grid lg:grid-cols-2 flex flex-col items-center gap-5'>

        <ProductImage images={images} title={title} />

        <div className='flex flex-col gap-2'>

          <div className='text-sm'>
            <h3 className='text-4xl font-semibold'>{title}</h3>
            <p>Brand: {brand}</p>
            <ReviewStars rating={rating} />
          </div>

          <div className='text-xl'>
            <div className='flex gap-2'>
              <p className='text-sm text-orange-800'>-{discountPercentage}%</p>
              <FormatPrice price={price} />
            </div>
            <div className='line-through text-sm'>
              <FormatPrice price={price*(1+discount)} />
            </div>
          </div>

          {/* Add To Cart Btn */}
          <AddToCartBtn stock={stock} />

          <p className='text-sm'>{description}</p>

          <div className='flex gap-3'>
            <p className='font-semibold'>Category:</p>
            <p>{category}</p>
          </div>

          <div className='flex gap-3'>
            <p className='font-semibold'>Warrnet:</p>
            <p>{warrantyInformation}</p>
          </div>

          <div className='flex items-center gap-6'>

            <div className='flex flex-col items-center justify-center'>
              <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB562506492_.png" alt="Return" className='w-8' />
              <p>{returnPolicy}</p>
            </div>
            
            <div className='flex flex-col items-center justify-center'>
              <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB562549966_.png" alt="Delivery" className='w-8' />
              <p>{shippingInformation}</p>
            </div>
          </div>
        
          <p className='font-semibold'>{availabilityStatus}</p>
          </div>
      </div>

      {/* Reviews */}
      <div className='flex flex-col items-center justify-center gap-10 py-5'>
        <h2 className='text-2xl'>Reviews</h2>
        <ProductReviews reviews={reviews} />
      </div>
    </div>
  )
}

export default SingleProduct
