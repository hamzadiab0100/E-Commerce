import React from 'react'
import { beatsnoop } from '../assets'
import { useAuth } from './AuthContext'
import { Link } from 'react-router-dom';

const Register = () => {
const {setName,setEmail,setPassword,signup,name,email,password,error} = useAuth();

    return (
        <div className='container mx-auto flex justify-between items-center my-24'>
            <div className='w-[609px] h-[609px] overflow-hidden bg-[#CBE4E8] '>
                <img src={beatsnoop} alt="beatsnoop" className='w-[609px] h-[609px] object-contain'/>
            </div>
            <div className='flex justify-center items-center w-[50%]'>
            <form onSubmit={signup} className='flex flex-col justify-center'>
                <h2 className='text-[36px] font-medium'>Create an account</h2>
                <p className='text-[16px] font-medium mb-10'>Enter your details below</p> 
                <div className='relative after:w-full focus:outline-none after:h-[1px] content-[""] after:bg-[#00000057] after:absolute after:bottom-0 after:left-0 w-full my-4 ' >  <input type="text"
                 value={name} 
                  autoComplete="name"
                 onChange={(e)=>setName(e.target.value)}
                 required className='  pr-0 w-full py-1    focus:outline-none ' placeholder='Enter your Name' /></div>
                <div className='relative after:w-full focus:outline-none after:h-[1px] content-[""] after:bg-[#00000057] after:absolute after:bottom-0 after:left-0 w-full my-4 ' >  <input type="email"
                  value={email}
                  autoComplete="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  required className='  pr-0 w-full py-1    focus:outline-none ' placeholder='Enter your Email' /></div>
                <div className='relative after:w-full focus:outline-none after:h-[1px] content-[""] after:bg-[#00000057] after:absolute after:bottom-0 after:left-0 w-full my-4 ' >  <input type="password"
                 value={password} 
                 autoComplete="current-password" 
                  onChange={(e)=>setPassword(e.target.value)}
                 required className='  pr-0 w-full py-1    focus:outline-none ' placeholder='Enter your Password' /></div>
                 {error&&(
                    <p className='text-center w-full text-red-600'>{error}</p>
                 )}
                <button type="submit" className='w-full h-[56px] bg-Secondary2 hover:bg-HoverButton duration-500 ease-in-out text-white font-medium tracking-wide rounded-sm my-4'>Create Account</button>
                <p className='flex justify-center text-[#383838]'>Already have account? <Link to="/login" className='underline px-2'>Log in</Link></p>
            </form>
            </div>
        </div>
    )
}

export default Register
