import React from 'react'
import { Link } from 'react-router-dom'


function HeroSection({data}) {
  return (
    <div className='HeroSection flex justify-evenly py-10 h-75 text-white'>
      <div className='hero-info w-[70%] lg:w-[50%] flex flex-col items-center justify-center gap-3'>
        <p className='flex items-center text-xl lg:text-5xl'>Welcome to Our {data.name} </p>
        <span className='lg:text-xl'>{data.tagline}</span>
        <p className='lg:text-xl'>{data.details}
        </p>
        <Link to='/products'>
          <button className='rounded py-1 px-3 border border-gray-700 lg:text-lg bg-[#1f242b] hover:scale-90'>Shop Now</button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
