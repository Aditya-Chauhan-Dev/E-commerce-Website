import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Globalcontext } from '../context/ProductContext';
import Navigator from '../component/NavigationPage/Navigator';
import FormatPrice from '../Helper/FormatPrice';
import ProductImage from '../component/homeComponents/product/productImages/ProductImage';

function SingleProduct() {
    const {getsingleProduct,isSingleLoading,oneProduct}=Globalcontext();
    // const API="https://fakestoreapi.com/products"
    const API="https://dummyjson.com/products"
    const {id}=useParams();
    const {id:index,title,description,category,images=[],tags=[],rating,price,brand,warrantyInformation,shippingInformation,availabilityStatus,reviews,returnPolicy}=oneProduct


    useEffect(() => {
        getsingleProduct(`${API}/${id}`)
    },[id])

    if(isSingleLoading){
      return <div>......Loading</div>
    }
    
  return (
    <div className='px-5 lg:px-10 items-center'>
      <Navigator title={title} />
      <div className='lg:grid lg:grid-cols-2 flex flex-col items-center gap-5'>
        <ProductImage images={images} title={title} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>brand:{brand}</p>
          <p>Rating:{rating}</p>
          <p>catogery:{category}</p>
          <FormatPrice price={price} />
        </div>
      </div>
      <div>
        <h3>Warrnet information{warrantyInformation}</h3>
        <p>{returnPolicy}</p>
        <p>{shippingInformation}</p>
        <p>{availabilityStatus}</p>
      </div>
    </div>
  )
}

export default SingleProduct
