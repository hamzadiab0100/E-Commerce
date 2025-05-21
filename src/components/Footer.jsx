import React, {  useState } from 'react';
import { LuSendHorizontal } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { appstore, playstore, qr } from '../assets';
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    const year = new Date().getFullYear();

    const [email,setEmail]=useState("");

       const handelSubmit= (e)=>{
        e.preventDefault();
        console.log(email);
        setEmail("");
    };

    
    return (
        <>
        <div className='w-full  bg-black text-white'>
            <div className='container mx-auto h-full flex justify-between items-start pt-16'>
            <div>
                <p className='text-[24px] font-bold'>Exclusive</p>
                <p className='text-[20px] font-medium my-5'>Subscribe</p>
                <p className='text-[16px] my-5'>Get 10% off your first order</p>
               <form onSubmit={handelSubmit} className=' relative flex items-center  my-5'>
                <input type="email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} id="" placeholder='Enter your email'  className='bg-black pr-12 placeholder:text-[16px] py-2 px-4 border-white border-2 rounded-md ' /> 
                <button  type="submit" className=' absolute   right-[10px]'><LuSendHorizontal size={24} /> </button>
                </form> 
            </div>
            <div >
                <p className='text-[20px] font-medium '>Support</p>
                <p className='text-[16px] font-normal my-5 text-wrap w-[70%]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <Link to="mailto:hamzadiab500@gmail.com" className='block text-[16px] font-normal my-5'>hamzadiab500@gmail.com</Link>
                <Link to="+201008658048" className='block text-[16px] font-normal my-5'>+201008658048</Link>
             
            </div>
            <div>
                <p className='text-[20px] font-medium'>Account</p>
                <p className='text-[16px] my-5'>My Account</p>
                <p className='text-[16px] my-5'>Login / Register</p>
                <p className='text-[16px] my-5'>Shop</p>
                <p className='text-[16px] my-5'>Wishlist</p>
                <p className='text-[16px] my-5'>Cart</p>
               
            </div>
            <div>
                <p className='text-[20px] font-medium'>Quick Link</p>
                <p className='text-[16px] my-5'>Privacy Policy</p>
                <p className='text-[16px] my-5'>Terms Of Use</p>
                <p className='text-[16px] my-5'>FAQ</p>
                <p className='text-[16px] my-5'>Contact</p>

               
            </div>
            <div>
            <p className='text-[20px] font-medium'>Download App</p>
            <p className='text-[16px] my-5'>Save $3 with App New User Only</p>
            <div className='flex items-center justify-between'>
                <img src={qr} alt="qr" className='h-[80px] w-[80px] object-cover' />
                <div className='flex flex-col justify-between gap-3'>
                    <img src={playstore} alt="" className='w-[104px] h-[30] object-cover'  />
                    <img src={appstore} alt="" className='w-[104px] h-[30] object-cover'  />
                </div>
               

            </div>
             <div className='flex items-center justify-between my-7'>
                <Link><IoLogoFacebook size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
                <Link><FaTwitter size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
                <Link><FaInstagram size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
                <Link><FaLinkedin size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>

                </div>
            </div>
           
        
            
            </div>
            <hr className='w-full h-[0.5px] border-0 bg-[#ffffff71]' />
      
            <div className='w-full text-center py-2 text-Text1'><p>© TwinStack {year}. All right reserved</p></div>
        </div>
        </>
    )
}

export default Footer
