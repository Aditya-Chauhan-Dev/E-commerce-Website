import about from '../assets/about.png'
import { FaAngellist } from "react-icons/fa6";
import { FaTruckLoading } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

function About() {


  return (
    <div className='flex flex-col gap-8'>
      <h2 className='about-us text-white text-4xl h-20  flex items-center justify-center '>About us</h2>

      <div className='flex flex-col items-center'>
        <h2 className='text-3xl font-semibold'>Who we are</h2>
        <p className='text-xl text-black pl-2'>we are dedicated to providing the best products at affordable prices with excellent customer service.</p>
      </div>

      <div className=' service flex justify-evenly text-white flex-wrap px-5 gap-3'>
            
        <div className='Serv-Card w-[48%] md:w-70 backdrop-blur-xl border border-#856A00/20 rounded-xl flex flex-col justify-center items-center gap-3 py-6 px-3 text-center text-white shadow-[0_8px_30px_#C2B067] relative overflow-hiddenbefore:absolute before:inset-0 before:rounded-xl before:border before:border-white/30 before:opacity-40 before:blur-[2px]'>
          <div className='flex flex-col items-center'>
            <FaAngellist className='text-4xl' />
            <h3 className='text-2xl font-semibold'>Our Mission</h3>
          </div>
          <p className='text-sm font-light'>Our mission is to deliver high-quality products at affordable prices while ensuring a seamless and enjoyable shopping experience. We aim to build long-term trust with our customers through reliability, innovation, and exceptional service.</p>
        </div>
      
        <div className=' Serv-Card w-[48%] md:w-70 backdrop-blur-xl border border-#856A00/20 rounded-xl flex flex-col justify-center items-center gap-3 py-6 px-3 text-center text-white shadow-[0_8px_30px_#C2B067] relative overflow-hiddenbefore:absolute before:inset-0 before:rounded-xl before:border before:border-white/30 before:opacity-40 before:blur-[2px]'>
          <div className='flex flex-col items-center'>
            <AiOutlineSafetyCertificate className='text-4xl' />
            <h3 className='text-2xl font-semibold'>Quality Products</h3>
          </div>
          <p className='text-sm font-light'>We carefully select and offer only the best products that meet high standards of quality and durability. Every item is tested to ensure customer satisfaction, so you always get value for your money.</p>
        </div>
      
        <div className=' Serv-Card w-[48%] md:w-70 backdrop-blur-xl border border-#856A00/20 rounded-xl flex flex-col justify-center items-center gap-3 py-6 px-3 text-center text-white shadow-[0_8px_30px_#C2B067] relative overflow-hiddenbefore:absolute before:inset-0 before:rounded-xl before:border before:border-white/30 before:opacity-40 before:blur-[2px]'>
          <div className='flex flex-col items-center'>
            <FaTruckLoading className='text-4xl' />
            <h3 className='text-2xl font-semibold'>Fast Delivery</h3>
          </div>
          <p className='text-sm font-light'>We provide quick and reliable delivery services to ensure your orders reach you on time. With efficient logistics and real-time tracking, you can shop with confidence and convenience.</p>
          </div>
      </div>

      <div className='flex items-center pl-7 pr-10 pb-4'>
          <img src={about} alt="" className='w-full h-100' />
      </div>
    </div>
  )
}

export default About
