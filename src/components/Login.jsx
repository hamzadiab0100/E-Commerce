import React from 'react';
import { beatsnoop } from '../assets';
import { useAuth } from './AuthContext';

const Login = () => {
    const {login,console,error,setEmaillog,setPasswordlog,passwordlog,emaillog} =useAuth();
    return (
        <div className='container mx-auto flex justify-between items-center my-24'>
                   <div className='w-[609px] h-[609px] overflow-hidden bg-[#CBE4E8] '>
                       <img src={beatsnoop} alt="beatsnoop" className='w-[609px] h-[609px] object-contain'/>
                   </div>
                   <div className='flex justify-center items-center w-[50%]'>
                   <form onSubmit={login} className='flex flex-col justify-center'>
                       <h2 className='text-[36px] font-medium'>Log in to Exclusive</h2>
                       <p className='text-[16px] font-medium mb-10'>Enter your details below</p> 
                       <div className='relative after:w-full focus:outline-none after:h-[1px] content-[""] after:bg-[#00000057] after:absolute after:bottom-0 after:left-0 w-full my-4 ' >
                          <input   autoComplete="email" 
                          value={emaillog} onChange={(e)=>setEmaillog(e.target.value)}  type="email"  required className='  pr-3 py-1    focus:outline-none ' placeholder='Enter your Email' /></div>
                       <div className='relative after:w-full focus:outline-none after:h-[1px] content-[""] after:bg-[#00000057] after:absolute after:bottom-0 after:left-0 w-full my-4 ' >
                          <input   autoComplete="current-password"  
                          value={passwordlog} onChange={(e)=>setPasswordlog(e.target.value)}    type="password"    required className='  pr-3 py-1    focus:outline-none ' placeholder='Enter your Password' /></div>
                          {error&& <p className='text-center text-Secondary2'>{error}</p>}
                       <button type="submit" className='w-full h-[56px] bg-Secondary2 hover:bg-HoverButton duration-500 ease-in-out text-white font-medium tracking-wide rounded-sm my-4'>Login</button>
                       
                   </form>
                   </div>
               </div>
    )
}

export default Login
