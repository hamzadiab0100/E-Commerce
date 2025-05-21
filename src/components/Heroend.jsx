import React from 'react';
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LuShieldCheck } from "react-icons/lu";
const Heroend = () => {
    return (
        <>
            <div className='container mx-auto my-20'>
            <div className='flex justify-around items-center'>
                <div className='flex flex-col justify-between items-center'>
                    <div className='w-[80px]  h-[80px] my-4  bg-[#2f2e3057] rounded-full flex justify-center items-center'>
                 <div className='p-2 bg-black rounded-full  '> <FaShippingFast color='white' size={40}  /></div>
                    </div>
                    <div className='text-center '>
                        <p className='text-[20px] font-semibold'>FREE AND FAST DELIVERY</p>
                        <p className='text-[14px] font-medium'>Free delivery for all orders over $140</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center'>
                    <div className='w-[80px]  h-[80px] my-4  bg-[#2f2e3057] rounded-full flex justify-center items-center'>
                 <div className='p-2 bg-black rounded-full  '> <RiCustomerService2Fill color='white' size={40}  /></div>
                    </div>
                    <div className='text-center '>
                        <p className='text-[20px] font-semibold'>24/7 CUSTOMER SERVICE</p>
                        <p className='text-[14px] font-medium'>Friendly 24/7 customer support</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center'>
                    <div className='w-[80px]  h-[80px] my-4  bg-[#2f2e3057] rounded-full flex justify-center items-center'>
                 <div className='p-2 bg-black rounded-full  '> <LuShieldCheck color='white' size={40}  /></div>
                    </div>
                    <div className='text-center '>
                        <p className='text-[20px] font-semibold'>MONEY BACK GUARANTEE</p>
                        <p className='text-[14px] font-medium'>We reurn money within 30 days</p>
                    </div>
                  
                </div>
            </div>

            </div>
        </>
    )
}

export default Heroend