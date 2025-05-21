import React, { useEffect, useState } from 'react'
import { useProduct } from './ProductContext';
import ProductRating from './ProductRating';
import { Link, useParams } from 'react-router-dom';
import {  FaRegHeart } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { img } from '../assets';

const ProductDetails = ({data}) => {
     const { name } = useParams();
     const [count,setCount] =useState(1);
     const decodedName = decodeURIComponent(name);
     const product = data.find(p => p.name === decodedName);

 

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
       
          return img ; 
        }
      }
   
    
    return (
        <div className='container mx-auto  my-16'>
          <div className='flex  justify-between h-[600px] items-center'>
           <div className='flex justify-between h-[600px] items-start gap-7 '>
            <div className='overflow-hidden flex h-full  flex-col  justify-between'>
                {product.productImage.map((item,index)=>(
                <div className='w-[170px] h-[138px] bg-Secondary flex  justify-center items-center' key={index}>
                    <img className='h-[114px] w-[121px] object-contain' src={convertDriveLinkToImageUrl(item)} loading='lazy' onError={(e) => e.currentTarget.src = img} alt="imegs" />

                </div>
            ))}</div>
            <div className='w-[500px] h-full flex justify-center items-center bg-Secondary'>
                <img className='h-[315px] w-[446px] object-contain'  src={convertDriveLinkToImageUrl(product.CoverImage)} loading='lazy' onError={(e) => e.currentTarget.src = img} alt={product.name} />
            </div>
           </div>


           <div className='flex flex-col justify-start h-full text-start items-start w-full  mx-10'>
            <h2 className='text-[24px] font-semibold text-center'>{product.name}</h2>
            <div className='flex items-center my-4'>
                <ProductRating rating={product.rating||4} />
                <p className='text-[#808080] px-2'>({product.rated||26} Reviews)</p>
                <p className='px-2'>|</p><p className='text-Button1'>In Stock</p>
            </div>
            <p className='text-[24px] font-semibold my-b'>{product.price}</p>
            <p className='text-[14px] font-normal w-[90%] my-6 '>{product.description}</p>
            <hr className='bg-black border-0  w-full h-[0.1px]' />

            <div className='w-full flex justify-between items-center my-5'>
                <div className='  flex justify- items-center w-[50%]'>
                    <button onClick={()=>{  
                        if (count > 1) {
                            setCount(count - 1);
                          }
                    }} className='text-[24px] px-4 border-black border-[2px]  py-1  rounded-l-md'>-</button>
                    <p className=' border-black border-y-[2px] py-1  px-16 text-[24px]' >{count}</p>
                    <button onClick={()=> setCount(count + 1)} className=' hover:bg-HoverButton hover:border-HoverButton duration-500 ease-in-out py-1 text-[24px] px-4 text-white border-[2px]  border-Secondary2 bg-Secondary2 m-0 rounded-r-md  '>+</button>
                </div>
            <div className='text-[16px] h-[45px] flex justify-center  items-center px-10 font-medium text-white border-Secondary2 border-[1px] bg-Secondary2 hover:border-HoverButton hover:bg-HoverButton duration-500 ease-in-out  rounded-[4px] '> <Link> Buy Now </Link></div>    
            <div className='w-[44px] h-[44px] rounded-md border-black border-[2px] flex justify-center items-center cursor-pointer'><FaRegHeart size={30} /> </div>
            </div>
            <div className='w-full h-[300px]  rounded-md border-[1px] border-black'>
                    <div className='h-[50%] mx-4 flex justify-start items-center'>
                        <FaShippingFast size={40} className='mr-5' />
                        <div >
                            <p className='text-[16px] font-medium my-2'>Free Delivery</p>
                            <p className='text-[14px] relative font-medium my-2 after:w-full after:content-[""] after:bottom-0 after:left-0 after:h-[1px] after:bg-black after:absolute'>Enter your postal code for Delivery Availability</p>
                        </div>
                    </div>
                    <hr className=' bg-black border-0 w-full h-[0.5px]' />
                    <div className='h-[50%] mx-4 flex justify-start items-center'>
                        <LuRefreshCw size={40} className='mr-5' />
                        <div >
                            <p className='text-[16px] font-medium my-2'>Return Delivery</p>
                            <p className='text-[14px]  font-medium my-2'>Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>
            </div>
           </div>
          </div>

        </div>
    )
}

export default ProductDetails
