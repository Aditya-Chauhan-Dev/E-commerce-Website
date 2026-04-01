import React from 'react'
import { FaTruckPlane } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";


function Services() {
  return (
    <div className=' service flex justify-evenly text-white flex-wrap px-5 gap-3'>
      
      <div className='Serv-Card w-[48%] md:w-70 backdrop-blur-xl border border-#856A00/20 rounded-xl flex flex-col justify-center items-center gap-3 py-6 px-3 text-center text-white shadow-[0_8px_30px_#C2B067] relative overflow-hiddenbefore:absolute before:inset-0 before:rounded-xl before:border before:border-white/30 before:opacity-40 before:blur-[2px]'>
        <FaTruckPlane size={30} className='logo text-[#C2B067]'/>
        <p>Fast & Free Delivery</p>
      </div>

      <div className=' Serv-Card w-[48%] md:w-70 backdrop-blur-xl border border-#856A00/20 rounded-xl flex flex-col justify-center items-center gap-3 py-6 px-3 text-center text-white shadow-[0_8px_30px_#C2B067] relative overflow-hiddenbefore:absolute before:inset-0 before:rounded-xl before:border before:border-white/30 before:opacity-40 before:blur-[2px]'>
        <div className='flex gap-2 justify-center items-center'>
          <MdOutlineSecurity size={30} className= 'logo text-[#C2B067]' />
          <p>Non-contact shipping</p>
        </div>

        <div className='flex gap-2 justify-center items-center'>
          <GiTakeMyMoney size={35} className=' logo text-[#C2B067]' />
          <p>Money-back Guaranteed</p>
        </div>
      </div>

      <div className=' Serv-Card w-[48%] md:w-70 backdrop-blur-xl border border-#856A00/20 rounded-xl flex flex-col justify-center items-center gap-3 py-6 px-3 text-center text-white shadow-[0_8px_30px_#C2B067] relative overflow-hiddenbefore:absolute before:inset-0 before:rounded-xl before:border before:border-white/30 before:opacity-40 before:blur-[2px]'>
        <RiSecurePaymentLine size={30} className='logo text-[#C2B067]' />
        <p>Secure Payment System</p>
      </div>
    </div>
  )
}

export default Services
