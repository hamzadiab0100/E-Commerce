import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  iphon } from '../assets';
import { Autoplay,Navigation, Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaApple } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import './styles.css';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className='w-[70%] h-[400.5px] bg-black mt-4 mx-auto overflow-hidden '>
  <Swiper
        modules={[Navigation, Pagination,Autoplay ]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={30}
        className="mySwiper"
      >
        <SwiperSlide className='bg-black '>
        <div className='mx-5   flex items-center justify-between w-full  bg-black '>
            <div className='w-[65%] ml-5 text-start bg-black '>
           <div className='bg-black flex items-center gap-2'>
            <FaApple size={49} color='white' className='bg-black ' />
            <p className='text-[16px] text-white mt-3 bg-black'>iPhone 14 Series</p>
            </div> <br />
            <p className='text-[48px] text-Text bg-black font-medium w-[80%]'>Up to 10% off Voucher</p><br />

            <div className='w-fit'>
               <Link className='flex items-center gap-3 relative text-white bg-black text-[16px] after:content-[""] after:absolute after:bottom-[-3px] after:bg-white after:w-[100%] after:h-[0.5px]'>Shop Now <FaArrowRight className='bg-black mt-1 ' size={16} color='white' /></Link>
              </div>
            </div>
         <img src={iphon} className='mt-20 w-auto h-auto' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-black '>
        <div className='mx-5   flex items-center justify-between w-full  bg-black '>
            <div className='w-[65%] ml-5 text-start bg-black '>
           <div className='bg-black flex items-center gap-2'>
            <FaApple size={49} color='white' className='bg-black ' />
            <p className='text-[16px] text-white mt-3 bg-black'>iPhone 14 Series</p>
            </div> <br />
            <p className='text-[48px] text-Text bg-black font-medium w-[80%]'>Up to 10% off Voucher</p><br />

            <div className='w-fit'>
               <Link className='flex items-center gap-3 relative text-white bg-black text-[16px] after:content-[""] after:absolute after:bottom-[-3px] after:bg-white after:w-[100%] after:h-[0.5px]'>Shop Now <FaArrowRight className='bg-black mt-1 ' size={16} color='white' /></Link>
              </div>
            </div>
         <img src={iphon} className='mt-20 w-auto h-auto' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-black '>
        <div className='mx-5   flex items-center justify-between w-full  bg-black '>
            <div className='w-[65%] ml-5 text-start bg-black '>
           <div className='bg-black flex items-center gap-2'>
            <FaApple size={49} color='white' className='bg-black ' />
            <p className='text-[16px] text-white mt-3 bg-black'>iPhone 14 Series</p>
            </div> <br />
            <p className='text-[48px] text-Text bg-black font-medium w-[80%]'>Up to 10% off Voucher</p><br />

            <div className='w-fit'>
               <Link className='flex items-center gap-3 relative text-white bg-black text-[16px] after:content-[""] after:absolute after:bottom-[-3px] after:bg-white after:w-[100%] after:h-[0.5px]'>Shop Now <FaArrowRight className='bg-black mt-1 ' size={16} color='white' /></Link>
              </div>
            </div>
         <img src={iphon} className='mt-20 w-auto h-auto' alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-black '>
        <div className='mx-5   flex items-center justify-between w-full  bg-black '>
            <div className='w-[65%] ml-5 text-start bg-black '>
           <div className='bg-black flex items-center gap-2'>
            <FaApple size={49} color='white' className='bg-black ' />
            <p className='text-[16px] text-white mt-3 bg-black'>iPhone 14 Series</p>
            </div> <br />
            <p className='text-[48px] text-Text bg-black font-medium w-[80%]'>Up to 10% off Voucher</p><br />

            <div className='w-fit'>
               <Link className='flex items-center gap-3 relative text-white bg-black text-[16px] after:content-[""] after:absolute after:bottom-[-3px] after:bg-white after:w-[100%] after:h-[0.5px]'>Shop Now <FaArrowRight className='bg-black mt-1 ' size={16} color='white' /></Link>
              </div>
            </div>
         <img src={iphon} className='mt-20 w-auto h-auto' alt="" />
          </div>
        </SwiperSlide>

       
      </Swiper>
</div>

  )
}

export default Slider