import React from 'react';
import { perfume, ps5, speaker, woman } from '../assets';

const Arrival = () => {
    return (
        <>
           <div className='container mx-auto'>
           <div className='flex  items-center gap-2 mt-10'> <p className='w-[20px] h-[40px] rounded-md bg-Secondary2'></p><p className='font-semibold text-[20px] text-Secondary2'>Featured</p></div>
           <p className='text-[36px] font-semibold my-7'>New Arrival</p>

                    {/**grid new arrival */}
           <div className='w-full h-[600px] flex justify-between  gap-4 mb-20'> 
            <div className='h-full w-[48%] bg-black flex justify-center items-end overflow-hidden relative rounded-md'>
            <img src={ps5} className='h-auto w-auto object-cover'  alt="ps5" />
            <div className='absolute left-7 bottom-0 text-white'>
                <p className='text-[24px] font-semibold tracking-wide'>PlayStation 5</p>
                <p className='text-[#FAFAFA] my-2 w-[70%]'>Black and White version of the PS5 coming out on sale.</p>
                <button className='text-[16px] w-fit tracking-wider font-medium relative after:content-[""] after:absolute after:w-full mb-10 after:h-[0.5px] after:bg-white after:bottom-0 after:left-0'>Shop Now</button>
            </div>
            </div>
            <div className='h-full w-[48%] flex flex-col gap-5 justify-between '>
            <div className='w-full h-[284px] relative bg-[#0D0D0D] rounded-md flex justify-end overflow-hidden'>
                <img src={woman} className='h-auto w-auto object-cover ' alt="" />
                <div className=' absolute h-full w-full bg-[#D9D9D9] opacity-[8%] z-[1]'></div>
                <div className='absolute left-7 bottom-0 text-white z-10'>
                <p className='text-[24px] font-semibold tracking-wide'>Women’s Collections</p>
                <p className='text-[#FAFAFA] my-2 w-[70%]'>Featured woman collections that give you another vibe.</p>
                <button className='text-[16px] w-fit tracking-wider font-medium relative after:content-[""] after:absolute after:w-full mb-10 after:h-[0.5px] after:bg-white after:bottom-0 after:left-0'>Shop Now</button>
            </div>
            </div>
            <div className='flex justify-between '>
                <div className='w-[270px] h-[284px] bg-[#0D0D0D] rounded-md flex justify-center items-center relative overflow-hidden'>
                <img src={speaker} className='h-[221px] w-[190px] object-cover z-10' alt="" />
                <div className=' absolute h-full w-full bg-[#D9D9D9] opacity-[8%] z-[1]'></div>
                <div className='absolute left-7 bottom-0 text-white z-20'>
                <p className='text-[24px] font-semibold tracking-wide'>Speakers</p>
                <p className='text-[#FAFAFA] text-[14px] my-2 w-[70%]'>Amazon wireless speakers</p>
                <button className='text-[16px] w-fit tracking-wider font-medium relative after:content-[""] after:absolute after:w-full mb-10 after:h-[0.5px] after:bg-white after:bottom-0 after:left-0'>Shop Now</button>
                </div>
                </div>
                <div className='w-[270px] h-[284px] bg-[#0D0D0D] rounded-md flex justify-center items-center relative overflow-hidden'>
                <img src={perfume} className='h-[221px] w-[190px] object-cover z-10' alt="" />
                <div className=' absolute h-full w-full bg-[#D9D9D9] opacity-[8%] z-[1]'></div>
                <div className='absolute left-7 bottom-0 text-white z-20'>
                <p className='text-[24px] font-semibold tracking-wide'>Perfume</p>
                <p className='text-[#FAFAFA] text-[14px] my-2 w-[100%]'>GUCCI INTENSE OUD EDP</p>
                <button className='text-[16px] w-fit tracking-wider font-medium relative after:content-[""] after:absolute after:w-full mb-10 after:h-[0.5px] after:bg-white after:bottom-0 after:left-0'>Shop Now</button>
                </div>
                </div>
                
            </div>
            </div>

           </div>
            </div> 
        </>
    )
}

export default Arrival
