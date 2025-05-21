import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Accountcom from './Accountcom';
import { useAuth } from './AuthContext';
const NavBar = () => {
  const location = useLocation();
  const {cart} =useAuth();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const goToCart = () => {
    if (isLoggedIn) {
      navigate('/cart');
    } else {
      alert('You Must logi First');
      navigate('/login'); 
    }
  };
  
  return (
    <>
    <div className='container mx-auto bg-white'>
    <div className='h-[93px] flex  items-center justify-between'>
        <h1 className='text-Button font-sans text-[24px] font-bold tracking-wider'>Exclusive</h1>
        <div>
          <ul className='flex gap-16'>
            <Link to='/' className={`text-[16px] font-medium  relative inline-block ${location.pathname ==="/" ? 'after:w-[100%]' :'after:w-[0%]' }  after:absolute after:content-[""] after:bg-black after:h-[2px]  after:-bottom-1 after:left-1/2 after:-translate-x-1/2  after:duration-500 after:ease-in-out `}>Home</Link>
            <Link to='/contact'  className={`text-[16px] font-medium  relative inline-block ${location.pathname ==="/contact" ? 'after:w-[100%]' :'after:w-[0%]' }  after:absolute after:content-[""] after:bg-black after:h-[2px]  after:-bottom-1 after:left-1/2 after:-translate-x-1/2  after:duration-500 after:ease-in-out `}>Contact</Link>
            <Link to='/about'  className={`text-[16px] font-medium  relative inline-block ${location.pathname ==="/about" ? 'after:w-[100%]' :'after:w-[0%]' }  after:absolute after:content-[""] after:bg-black after:h-[2px]  after:-bottom-1 after:left-1/2 after:-translate-x-1/2  after:duration-500 after:ease-in-out `}>About</Link>
            <Accountcom/>
          </ul>
      </div>
        <div className='flex gap-3'>
        <CiHeart  size={35} />
       <button onClick={goToCart}  className=' relative'>
        <IoCartOutline size={32} />
        <span className=' absolute top-[-5px] right-[-5px] pt-[2px] px-[8px] text-white font-medium bg-[#db4444e3] animate-bounce rounded-full text-[14px]'>{cart.length ||"0"}</span>
        </button> 
        </div>
    </div>
    </div>
    <hr  className=' h-[1px] w-full bg-[#d8d8d8] border-none'/>
    </>
  )
}

export default NavBar