import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col gap-5 py-4 items-center'>
      <h2 className='title-line w-full'>Contact us</h2>
      <div className=' contact flex w-full items-center justify-evenly'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7000.960273797019!2d77.43918899279052!3d28.675280665573876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bc3b6220c5%3A0x80c87fb76576da30!2sRDC%2C%20Sector%2015%2C%20Sector%2010%2C%20Raj%20Nagar%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201002!5e0!3m2!1sen!2sin!4v1773140238832!5m2!1sen!2sin" width="50%" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div>
        <form action="https://formspree.io/f/xjgayrar" method='POST' className='contact flex flex-col gap-2'>
          <input type="text" placeholder='username' name='username' required autoComplete='off' className=' px-2 py-2 outline-none border-2 border-gray-600 w-100 placeholder:text-black' />

          <input type="email" name="email" placeholder='E-mail' required autoComplete='off' className=' px-2 py-2 outline-none border-2 border-gray-600 placeholder:text-black'/>

          <textarea name="details" placeholder='Details' rows={5} color='10' required autoComplete='off' className='outline-none border-2 border-gray-600 px-2 py-2 '></textarea>

          <input type="submit" value="Submit" className='rounded py-1 px-3 border border-gray-700 text-lg bg-[#1f242b] text-white'/>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
