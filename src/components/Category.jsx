import React from 'react';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { ImHeadphones } from "react-icons/im";
import { IoGameControllerOutline } from "react-icons/io5";
const Categories = () => {
    return (
        <>
              <div className='container mx-auto'>
       <div className='flex  items-center gap-2 mt-10'> <p className='w-[20px] h-[40px] rounded-md bg-Secondary2'></p><p className='font-semibold text-[20px] text-Secondary2'>Categories</p></div>
        <p className='text-[36px] font-semibold my-7'>Browse By Category</p>
      
      
        <div className='flex items-center justify-between my-20'>
            <div className='w-[170px] h-[145px] cursor-pointer border-[1px] border-black rounded-lg flex justify-center items-center hover:bg-Secondary2 hover:text-white hover:border-Secondary2 duration-500 ease-in-out  '><div className='flex flex-col gap-2 justify-center items-center'>
            <IoPhonePortraitOutline size={56} />
            <p className='text-[16px] font-semibold tracking-wide group-hover:tex'>Phones</p>
                </div></div>
                <div className='w-[170px] h-[145px] cursor-pointer border-[1px] border-black rounded-lg flex justify-center items-center hover:bg-Secondary2 hover:text-white hover:border-Secondary2 duration-500 ease-in-out  '><div className='flex flex-col gap-2 justify-center items-center'>
            <HiOutlineComputerDesktop size={56} />
            <p className='text-[16px] font-semibold tracking-wide group-hover:tex'>Computers</p>
                </div></div>
                <div className='w-[170px] h-[145px] cursor-pointer border-[1px] border-black rounded-lg flex justify-center items-center hover:bg-Secondary2 hover:text-white hover:border-Secondary2 duration-500 ease-in-out  '><div className='flex flex-col gap-2 justify-center items-center'>
            <BsSmartwatch size={56} />
            <p className='text-[16px] font-semibold tracking-wide group-hover:tex'>SmartWatch</p>
                </div></div>
                <div className='w-[170px] h-[145px] cursor-pointer border-[1px] border-black rounded-lg flex justify-center items-center hover:bg-Secondary2 hover:text-white hover:border-Secondary2 duration-500 ease-in-out  '><div className='flex flex-col gap-2 justify-center items-center'>
            <MdOutlinePhotoCamera size={56} />
            <p className='text-[16px] font-semibold tracking-wide group-hover:tex'>Camera</p>
                </div></div>
                <div className='w-[170px] h-[145px] cursor-pointer border-[1px] border-black rounded-lg flex justify-center items-center hover:bg-Secondary2 hover:text-white hover:border-Secondary2 duration-500 ease-in-out  '><div className='flex flex-col gap-2 justify-center items-center'>
            <ImHeadphones size={56} />
            <p className='text-[16px] font-semibold tracking-wide group-hover:tex'>HeadPhones</p>
                </div></div>
                <div className='w-[170px] h-[145px] cursor-pointer border-[1px] border-black rounded-lg flex justify-center items-center hover:bg-Secondary2 hover:text-white hover:border-Secondary2 duration-500 ease-in-out  '><div className='flex flex-col gap-2 justify-center items-center'>
            <IoGameControllerOutline size={56} />
            <p className='text-[16px] font-semibold tracking-wide group-hover:tex'>Gaming</p>
                </div></div>
        </div>
        <div className='container mx-auto mb-20'> <hr /></div>

      
     
        
      
     




       </div>
        </>
    )
}

export default Categories
