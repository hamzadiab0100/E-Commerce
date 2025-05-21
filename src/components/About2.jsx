import React from 'react';
import { BiDollarCircle } from "react-icons/bi";
import { IoStorefront } from "react-icons/io5";
import { IoBagHandle } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";

const About2 = () => {
    return (
        <>
            <div className='container mx-auto my-20'>
            <div className='flex justify-between items-center'>
                  <div className='flex flex-col justify-center items-center w-[270px] h-[230px] border-[1px] border-black rounded-md group hover:bg-Secondary2 hover:text-white hover:border-Secondary2 duration-500 cursor-pointer ease-in-out'>
                     <div className='w-[80px]  h-[80px] my-4  bg-[#2f2e3057] rounded-full flex justify-center items-center'>
                     <div className='p-3 group-hover:text-black text-white group-hover:bg-white bg-black rounded-full  duration-500 ease-in-out '> <IoStorefront  size={35}  /></div> </div>
                     <p className='text-[32px] font-bold text-center'>10.5k </p>
                     <p className='text-center'>Sallers active our site</p>
                  </div>
                  <div className='flex flex-col justify-center items-center w-[270px] h-[230px] border-[1px] border-black rounded-md group hover:bg-Secondary2 hover:text-white hover:border-Secondary2 duration-500 cursor-pointer ease-in-out'>
                     <div className='w-[80px]  h-[80px] my-4  bg-[#2f2e3057] rounded-full flex justify-center items-center'>
                     <div className='p-3 group-hover:text-black text-white group-hover:bg-white bg-black rounded-full  duration-500 ease-in-out '> <BiDollarCircle  size={35}  /></div> </div>
                     <p className='text-[32px] font-bold text-center'>33k</p>
                     <p className='text-center'>Mopnthly Produduct Sale</p>
                  </div>
                  <div className='flex flex-col justify-center items-center w-[270px] h-[230px] border-[1px] border-black rounded-md group hover:bg-Secondary2 hover:text-white hover:border-Secondary2 duration-500 cursor-pointer ease-in-out'>
                     <div className='w-[80px]  h-[80px] my-4  bg-[#2f2e3057] rounded-full flex justify-center items-center'>
                     <div className='p-3 group-hover:text-black text-white group-hover:bg-white bg-black rounded-full   duration-500 ease-in-out'> <IoBagHandle  size={35}  /></div> </div>
                     <p className='text-[32px] font-bold text-center'>45.5k</p>
                     <p className='text-center'>Customer active in our site</p>
                  </div>
                  <div className='flex flex-col justify-center items-center w-[270px] h-[230px] border-[1px] border-black rounded-md group hover:bg-Secondary2 hover:text-white hover:border-Secondary2 duration-500 cursor-pointer ease-in-out'>
                     <div className='w-[80px]  h-[80px] my-4  bg-[#2f2e3057] rounded-full flex justify-center items-center'>
                     <div className='p-3 group-hover:text-black text-white group-hover:bg-white bg-black rounded-full  duration-500 ease-in-out '> <FaSackDollar  size={35}  /></div> </div>
                     <p className='text-[32px] font-bold text-center'>25k</p>
                     <p className='text-center'>Anual gross sale in our site</p>
                  </div>
            </div>
            </div>
        </>
    )
}

export default About2
