import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { img } from '../assets';

function Cart() {
    const {cart,RemoveFromCart,cartfetch} =useAuth();
 
    const getTotalPrice = (cart) => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };

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
      
    
  return (
    <div className='container mx-auto '>
        <div className='flex flex-col justify-center items-center'>
        <div className='grid grid-cols-4  w-[80%] gap-48 items-start py-10 rounded-lg shadow-lg my-6 px-5 border'>
            <p className='text-[16px] font-medium'>Product</p>
            <p className='text-[16px] font-medium'>Price</p>
            <p className='text-[16px] font-medium'>Quantity</p>
            <p className='text-[16px] font-medium'>Subtotal</p>

        </div>
        {cart.length === 0? (
            <p className='my-20 font-semibold tracking-wide text-xl'>The Cart Is Empty</p>
        ):(
            <> {cart.map((itm)=>(
                <div key={itm.productId} className='grid justify-center overflow-hidden  grid-cols-4 w-[80%] gap-48 items-center py-10 rounded-lg shadow-lg my-6 px-5 border'>
                <div className='flex gap-4 items-center w-[150%] relative'>
                  <img src={convertDriveLinkToImageUrl(itm.image)} onError={(e) => e.currentTarget.src = img} alt={itm.productName} loading='lazy' className='bg-center bg-contain w-[54px] h-[54px]' />
                 <p className='text-[16px] font-medium'>{itm.productName}</p>
                 <button onClick={async  ()=>{
                    await RemoveFromCart(itm.cartItemId);
                    await cartfetch();}} className=' absolute top-[-15px] bg-[#db4444e3]  text-white flex justify-center items-center w-[24px] h-[24px] rounded-full'><p className='mb-[4px]'>x</p></button>
                </div>
                 <p className='text-[16px] font-medium'>${itm.price}</p>
                <div className='w-[50px]  p-1 bg-[#7a7a7a3f] rounded-md px-2 flex justify-center'>
              
                    <span>{itm.quantity}</span>
                   
                </div>
                 <p className='text-[16px] font-medium'>${itm.price * itm.quantity}</p>
     
             </div>
            ))}
            </>
        )}

        


        <div className='flex w-[80%] justify-between items-start '>
            <Link to='/'className='my-8 px-8 py-4 border-2 font-medium rounded-md'>Return To Shop</Link>   
            <div className='w-[470px] border-2 border-black rounded-sm px-4 py-6 mb-10'>
                <p className='text-[20px] font-medium tracking-wide'>Cart Total</p>
                <div className='flex justify-between items-center my-4'>
                    <p>Subtotal:</p>
                    <p>${getTotalPrice(cart) }</p>                    
                </div>
                <hr />
                
                <div className='flex justify-between items-center my-4'>
                    <p>Shipping:</p>
                    <p>Free</p> 
                </div>
                <hr />
                

                <div className='flex justify-between items-center my-4'>
                    <p>Total:</p>
                    <p>${getTotalPrice(cart) }</p>                    
                </div>
                <div className='flex justify-center items-center mt-6'>
               <Link className='py-4 px-8 bg-Secondary2 rounded-md text-white hover:bg-HoverButton duration-300 ease-in-out'>
                Procees to checkout
                </Link>
                </div>
               

            </div>        
            </div>

         </div>
    </div>
  )
}

export default Cart