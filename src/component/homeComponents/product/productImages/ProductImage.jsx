import React, { useState } from 'react'

function ProductImage({images},title) {
    const [main, setMain] = useState(images[0])
  return (
    <div>
        {/* Main Image */}
        <img src={main} className="w-120 h-120 object-cover" />

        {/* Small images */}

        <div className="flex gap-2 mt-2">
        {images.map((img, index) => (
            <img 
            key={index} 
            src={img} 
            onClick={()=>{setMain(img)}}
            className="w-20 h-20 cursor-pointer border"
         />
         ))}
        </div>
    </div>
  )
}

export default ProductImage
