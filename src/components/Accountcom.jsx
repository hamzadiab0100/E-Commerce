import React from 'react'
import { useAuth } from './AuthContext'
import { Link, useLocation } from 'react-router-dom';

const Accountcom = () => {
    const {isLoggedIn} =useAuth();
    const location = useLocation();
    return (
        <>
          {isLoggedIn ?(
             <div>  <Link to='/account'  className={`text-[16px] font-medium  relative inline-block ${location.pathname ==="/account" ? 'after:w-[100%]' :'after:w-[0%]' }  after:absolute after:content-[""] after:bg-black after:h-[2px]  after:-bottom-1 after:left-1/2 after:-translate-x-1/2  after:duration-500 after:ease-in-out `}>Account</Link> </div>
          ):(
          <div>  <Link to='/signup'  className={`text-[16px] font-medium  relative inline-block ${location.pathname ==="/signup" ? 'after:w-[100%]' :'after:w-[0%]' }  after:absolute after:content-[""] after:bg-black after:h-[2px]  after:-bottom-1 after:left-1/2 after:-translate-x-1/2  after:duration-500 after:ease-in-out `}>Sign Up</Link> </div>
          )}  
         
        </>
    )
}

export default Accountcom
