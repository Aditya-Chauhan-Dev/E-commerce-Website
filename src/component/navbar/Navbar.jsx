import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import logo from '../../assets/logo.png'
import Toggle from '../buttonTheme/toggel';
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';


function Navbar() {;
    const [menu, setMenu] = useState()
    return (
        <div className=' navbar  h-16  flex justify-between items-center px-5'>
        <div className='h-[80%] flex justify-center items-center gap-2'>
            <img src={logo} alt='logo' className='h-full' />   
        </div>
        <div className= {`${menu ? "active":""} items-center gap-5 flex `}>
            <ul className='nav-list flex items-center gap-5'>
                <li>
                    <Link
                    to='/'
                    onClick={()=>setMenu(false)} 
                    className='hover:text-[#C2B067]'>Home</Link></li>
                <li>
                    <Link
                    to='/products'
                    onClick={()=>setMenu(false)} 
                    className='hover:text-[#C2B067]'>Products</Link></li>
                <li>
                    <Link
                    to='/about'
                    onClick={()=>setMenu(false)}
                    className='hover:text-[#C2B067]'>About</Link></li>
                <li>
                    <Link
                    to='/contact'
                    onClick={()=>setMenu(false)} 
                    className='hover:text-[#C2B067]'>Contacts</Link></li>
                <li>
                    <Link
                    to='/cart'
                    onClick={()=>setMenu(false)} 
                    className='text-[#C2B067]'><CiShoppingCart size={29} /></Link></li>
                    <li><Toggle/></li>
            </ul> 
        <div className='mobile-nav-btn'>
            <MdOutlineMenuOpen size={29} className='menu-open' onClick={()=>setMenu(true)} />
            <IoClose size={29} className='menu-close' onClick={()=>setMenu(false)} />
        </div>
        </div>
    </div>
  )
}

export default Navbar;

