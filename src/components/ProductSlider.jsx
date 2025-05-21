import React, { useRef } from 'react';
import {  FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { img } from '../assets';
import { Link } from 'react-router-dom';
import ProductRating from './ProductRating';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';

import { useAuth } from './AuthContext';


const FlashSales = ({suptitle,title,data,Arrow,all,slider,link}) => {
 const {AddToCart,cartfetch} =useAuth();
  function convertDriveLinkToImageUrl(driveUrl) {
    if (!driveUrl) {
   
      return img; 
    }
  
    const regex = /(?:\/d\/|id=|open\?id=)([a-zA-Z0-9_-]{10,})/;
    const match = driveUrl.match(regex);
    if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/thumbnail?id=${fileId}`;
    } else {
     
      return img; 
    }
  }


    const swiperRef = useRef(null);
   
    return (
        <>
            <div className='container mx-auto '>
       <div className='flex  items-center gap-2 mt-24'> <p className='w-[20px] h-[40px] rounded-md bg-Secondary2'></p><p className='font-semibold text-[20px] text-Secondary2'>{suptitle}</p></div>

      <div className='flex justify-between items-center'>
        <p className='text-[36px] font-semibold my-7'>{title}</p>
        {Arrow?(
          <div className='flex gap-10'>
          <button onClick={(e)=>swiperRef.current?.slidePrev()} className='w-[46px] h-[46px] rounded-full bg-Secondary flex items-center justify-center hover:opacity-[50%]'><FaArrowLeft size={24} /> </button>
          <button onClick={(e) => swiperRef.current?.slideNext()}  className='w-[46px] h-[46px] rounded-full bg-Secondary flex items-center justify-center hover:opacity-[50%]'><FaArrowRight size={24} /></button>
      </div>
        ):(
          <div className='flex justify-center mb-10'><Link to={link} className='text-[16px] font-medium text-white bg-Secondary2 hover:bg-HoverButton duration-500 ease-in-out my-5 rounded-[4px] py-4 px-11 '>View All </Link></div>
        )}
        
      </div>
      {slider?(
        <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
         style={{
          padding: '10px',
          
         
        }}
        >
          {data.map((hamza)=>(
              <SwiperSlide key={hamza.productId} >
         
          <div className='  flex flex-col h-[350px] w-[300px]'>
          <div className='bg-Secondary group cursor-pointer flex justify-center items-center h-[250px] w-[270px] relative overflow-hidden rounded-md'>
              <p className='bg-Secondary2 w-fit px-2 py-1 rounded-lg text-white absolute top-2 left-2'>{hamza.discount || "20%"} </p>
             
              <div className='flex flex-col gap-2 absolute right-2 top-3'>
               <div className='w-[35px] h-[35px] bg-white rounded-full flex justify-center items-center '>
              <FaRegHeart size={24} />
               </div>
               <Link  to={`/product/${encodeURIComponent(hamza.name)}`} key={hamza.productId} className='w-[35px] h-[35px] bg-white rounded-full flex justify-center items-center '>
              <IoEyeOutline size={24} />
               </Link>
              </div>
              <img src={convertDriveLinkToImageUrl(hamza.showImage)} loading='lazy'  onError={(e) => e.currentTarget.src = img} alt={hamza.name} className='w-[170px] h-[150px] object-contain' />
              <button   onClick={async  ()=>{
                        await  AddToCart(hamza.productId);
                        await  cartfetch();

              }} className=' font-medium absolute bottom-[-50px] group-hover:bottom-0 duration-500 ease-in-out w-full bg-black text-white text-center py-2'>Add To Cart </button>
          </div>
          <p className='text-[16px] font-medium my-4 whitespace-nowrap break-words w-full'>{hamza.name} </p>
          <p className='text-Secondary2 text-[16px] font-medium'>${hamza.price}<span className='text-Text1 line-through ml-3'>{hamza.priced}</span></p>
         <div className='flex items-center'> <ProductRating rating={hamza.rating || 4} /> <span className='text-Text1  ml-3'>({hamza.rated ||26})</span></div>
  
          </div>
          </SwiperSlide>
          ))}
          
  
        
       
          
        
       
  
        </Swiper>
      ):(
        <div className='flex justify-between items-center flex-wrap gap-y-10 mb-20'>
          {data.map((hamza)=>(
            <div key={hamza.productId} className=' ml-2  flex flex-col items-center h-[350px] w-[300px]'>
           <div className='  flex flex-col h-[350px] w-[300px]'>
          <div className='bg-Secondary group cursor-pointer flex justify-center items-center h-[250px] w-[270px] relative overflow-hidden rounded-md'>
              <p className='bg-Secondary2 w-fit px-2 py-1 rounded-lg text-white absolute top-2 left-2'>{hamza.discount || "20%"} </p>
             
              <div className='flex flex-col gap-2 absolute right-2 top-3'>
               <div className='w-[35px] h-[35px] bg-white rounded-full flex justify-center items-center '>
              <FaRegHeart size={24} />
               </div>
               <Link to={`/product/${encodeURIComponent(hamza.name)}`} key={hamza.productId} className='w-[35px] h-[35px] bg-white rounded-full flex justify-center items-center '>
              <IoEyeOutline size={24} />
               </Link>
              </div>
              <img src={convertDriveLinkToImageUrl(hamza.showImage)} onError={(e) => e.currentTarget.src = img} alt="" className='w-[170px] h-[150px] object-contain' />
              <button onClick={async  ()=>{
                        await  AddToCart(hamza.productId);
                        await  cartfetch();

              }} className=' font-medium absolute bottom-[-50px] group-hover:bottom-0 duration-500 ease-in-out w-full bg-black text-white text-center py-2'>Add To Cart </button>
          </div>
          <p className='text-[16px] font-medium my-4 whitespace-nowrap break-words w-full'>{hamza.name} </p>
          <p className='text-Secondary2 text-[16px] font-medium'>${hamza.price}<span className='text-Text1 line-through ml-3'>{hamza.priced}</span></p>
         <div className='flex items-center'> <ProductRating rating={hamza.rating ||4} /> <span className='text-Text1  ml-3'>({hamza.rated ||26})</span></div>
  
          </div>
            </div>
          ))}
        </div>
      )}
      
      {all ?(
        <div className='flex justify-center mb-10'><Link to={link} className='text-[16px] font-medium text-white bg-Secondary2 hover:bg-HoverButton duration-500 ease-in-out my-5 rounded-[4px] py-4 px-11 '>View All Products</Link></div>
      ):(
        <div></div>
      )

      }




       </div>
        </>
    )
}

export default FlashSales