// const Formatprice=(price)=>{
//     return Intl.NumberFormat("en_IN",{
//         style: "currency",
//         currency: "INR",
//         maximumFractionDigits: 2,
//     }).format(price/94.62)
// }

// export default Formatprice;
import React from 'react'

const FormatPrice = ({price}) => {
    
    
  return Intl.NumberFormat("en-IN",{
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(price*94.62)
}

export default FormatPrice
