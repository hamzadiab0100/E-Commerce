import React, { useEffect, useState } from 'react'
import { jpj } from '../assets'

const Categories = () => {
       const formatTime =(value) => (value < 10 ? `0${value}` : value);
        const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      const days=89;
        useEffect(() => {
          const endDate = new Date();
          endDate.setDate(endDate.getDate() + days);
      
          const interval = setInterval(() => {
            const now = new Date();
            const distance = endDate - now;
      
            if (distance <= 0) {
              clearInterval(interval);
              setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
              return;
            }
      
            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distance % (1000 * 60)) / 1000);
      
            setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
          }, 1000);
      
          return () => clearInterval(interval);
        }, [days]);
    return (
        <>
        <div className='container mx-auto'>
            <div className='w-full h-[500px] bg-black my-10 flex justify-between items-center px-16 overflow-hidden'>
                <div className='w-[50%]'>
                  <p className='text-Button1 text-[16px] font-semibold'>Categories</p>
                  <br />
                  <p className='text-[48px] font-semibold text-white w-[440px] mb-5'>Enhance Your Music Experience</p>
                  <div className='flex gap-8'>
                    <div className='flex flex-col justify-center items-center w-[62px] h-[62px] rounded-full bg-[#FFFFFF]'>
                        <p className='font-semibold'>{formatTime(timeLeft.hours)}</p>
                        <p className='text-[11px]'>Hours</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[62px] h-[62px] rounded-full bg-[#FFFFFF]'>
                        <p className='font-semibold'>{formatTime(timeLeft.days)}</p>
                        <p className='text-[11px]'>Days</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[62px] h-[62px] rounded-full bg-[#FFFFFF]'>
                        <p className='font-semibold'>{formatTime(timeLeft.minutes)}</p>
                        <p className='text-[11px]'>Minutes</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[62px] h-[62px] rounded-full bg-[#FFFFFF]'>
                        <p className='font-semibold'>{formatTime(timeLeft.seconds)}</p>
                        <p className='text-[11px]'>Seconds</p>
                    </div>
                  </div>
                  <button className='bg-Button1 text-[16px] font-medium text-white   hover:opacity-[60%] duration-500 ease-in-out my-5 rounded-[4px] py-[14px] px-11 mt-10  '>Buy Now!</button>
                </div>
                <div >
                    <img src={jpj} alt="" className='h-[330px] w-[568px] object-cover'   />
                </div>

            </div>

        </div>
            
        </>
    )
}

export default Categories
