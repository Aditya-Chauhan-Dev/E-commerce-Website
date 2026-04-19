import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function AddToCartBtn({ stock, oneProduct }) {

    const [quantity, setQuantity] = useState(1)

    const { addToCart } = useCart();
    const navigate = useNavigate();

    const increase = () => {
        if (stock > quantity) {
            setQuantity(quantity + 1)
        }
    }

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = () => {
        addToCart({ ...oneProduct, quantity });
        navigate("/cart"); // redirect
    }

    return (
        <div className='flex flex-col w-fit items-center'>
            <div className='flex items-center gap-6 pb-2 text-lg'>
                <FaMinus onClick={decrease} />
                <p>{quantity}</p>
                <FaPlus onClick={increase} />
            </div>

            <button 
              onClick={handleAddToCart}
              className='CartBtn rounded py-1 px-3 border border-gray-700 lg:text-lg bg-[#1f242b] text-[#fff]'>
              Add to cart
            </button>
        </div>
    )
}

export default AddToCartBtn