import React from 'react'
import { emma, tom, willsmith } from '../assets';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Autoplay,Navigation, Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const OurSlider = () => {
    return (
        <>
        <div className='container mx-auto flex '>
    <Swiper
    modules={[Navigation, Pagination,Autoplay ]}
            navigation
            pagination={{ clickable: true }}
           
            slidesPerView={3}
            spaceBetween={100}
            
    >

        <SwiperSlide>
        <div className='w-[370px]'>
        <div className='w-[370px] h-[430px] bg-Secondary rounded-sm overflow-hidden flex justify-center items-end'>
            <img src={tom} alt="tom" className='w-ah-auto h-auto object-contain' />
        </div>
        <h3 className='text-[32px] mt-4 font-medium'>Tom Cruise</h3>
        <p className='text-[16px]'>Founder & Chairman</p>
      <div  className='flex items-center gap-5 mt-2 mb-10 w-full '>
      <Link ><FaTwitter size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      <Link ><FaInstagram size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      <Link ><FaLinkedin size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[370px]'>
        <div className='w-[370px] h-[430px] bg-Secondary rounded-sm overflow-hidden flex justify-center items-end'>
            <img src={emma} alt="emma" className='w-ah-auto h-auto object-contain' />
        </div>
        <h3 className='text-[32px] mt-4 font-medium'>Emma Watson</h3>
        <p className='text-[16px]'>Product Designer</p>
      <div  className='flex items-center gap-5 mt-2 mb-10 w-full '>
      <Link ><FaTwitter size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      <Link ><FaInstagram size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      <Link ><FaLinkedin size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[370px]'>
        <div className='w-[370px] h-[430px] bg-Secondary rounded-sm overflow-hidden flex justify-center items-end'>
            <img src={willsmith} alt="willsmith" className='w-ah-auto h-auto  object-contain' />
        </div>
        <h3 className='text-[32px] mt-4 font-medium'>Will Smith</h3>
        <p className='text-[16px]'>Managing Director</p>
      <div  className='flex items-center gap-5 mt-2 mb-10 w-full '>
      <Link ><FaTwitter size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      <Link ><FaInstagram size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      <Link ><FaLinkedin size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[370px]'>
        <div className='w-[370px] h-[430px] bg-Secondary rounded-sm overflow-hidden flex justify-center items-end'>
            <img src={tom} alt="tom" className='w-ah-auto h-auto object-contain' />
        </div>
        <h3 className='text-[32px] mt-4 font-medium'>Tom Cruise</h3>
        <p className='text-[16px]'>Founder & Chairman</p>
      <div  className='flex items-center gap-5 mt-2 mb-10 w-full '>
      <Link ><FaTwitter size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      <Link ><FaInstagram size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      <Link ><FaLinkedin size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[370px]'>
        <div className='w-[370px] h-[430px] bg-Secondary rounded-sm overflow-hidden flex justify-center items-end'>
            <img src={emma} alt="emma" className='w-ah-auto h-auto object-contain' />
        </div>
        <h3 className='text-[32px] mt-4 font-medium'>Emma Watson</h3>
        <p className='text-[16px]'>Product Designer</p>
      <div  className='flex items-center gap-5 mt-2 mb-10 w-full '>
      <Link ><FaTwitter size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      <Link ><FaInstagram size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      <Link ><FaLinkedin size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[370px]'>
        <div className='w-[370px] h-[430px] bg-Secondary rounded-sm overflow-hidden flex justify-center items-end'>
            <img src={willsmith} alt="willsmith" className='w-ah-auto h-auto  object-contain' />
        </div>
        <h3 className='text-[32px] mt-4 font-medium'>Will Smith</h3>
        <p className='text-[16px]'>Managing Director</p>
      <div  className='flex items-center gap-5 mt-2 mb-10 w-full '>
      <Link ><FaTwitter size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      <Link ><FaInstagram size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      <Link ><FaLinkedin size={24} className=' hover:text-Secondary2 duration-300 ease-out' /></Link>
      </div>
       </div>
        </SwiperSlide>
        

      
        

    </Swiper>
       
        </div>
        </>
    )
}

export default OurSlider
