import React from 'react';
import Slider from './Slider';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='container mx-auto pb-20 '>
        <div className='flex justify-between w-full '>
        <div className='flex'>
            <div>
              <Link className='text-[19px]  block  my-4 hover:text-Text1 duration-500 ease-in-out'>Woman’s Fashion
             <IoIosArrowForward className='inline-block ml-[18px]  text-[20px]'  /></Link>
              <Link className='text-[19px] block my-4 hover:text-Text1 duration-500 ease-in-out'>Men’s Fashion <IoIosArrowForward className='inline-block ml-10  text-[20px] '  /></Link>
              <p className='text-[19px]  my-4 hover:text-Text1 duration-500 ease-in-out cursor-pointer'>Electronics</p>
              <p className='text-[19px]  my-4 hover:text-Text1 duration-500 ease-in-out cursor-pointer'>Home & Lifestyle</p>
              <p className='text-[19px]  my-4 hover:text-Text1 duration-500 ease-in-out cursor-pointer'>Medicine</p>
              <p className='text-[19px]  my-4 hover:text-Text1 duration-500 ease-in-out cursor-pointer'>Sports & Outdoor</p>
              <p className='text-[19px]  my-4 hover:text-Text1 duration-500 ease-in-out cursor-pointer'>Baby’s & Toys</p>
              <p className='text-[19px]  my-4 hover:text-Text1 duration-500 ease-in-out cursor-pointer'>Groceries & Pets</p>
              <p className='text-[19px]  mt-4 hover:text-Text1 duration-500 ease-in-out cursor-pointer'>Health & Beauty</p>
            </div>
            <hr className="ml-[20px] w-[0.5px] h-full bg-[#d8d8d8] border-none" />
        </div>
        <Slider className='w-full'/>
        </div>
    </div>
  )
}

export default Hero