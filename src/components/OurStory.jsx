import React from 'react';
import ourStory from "../assets/image/OurStory.webp";


const OurStory = () => {
    return (
        <>
        <div className='container mx-auto my-10'>
            <div className='flex justify-between items-center'>
                <div className='w-[50%]'>
                    <h2 className='text-[54px] font-semibold my-4'>Our Story</h2>
                    <p className='my-4 text-[16px] w-[80%]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className='my-4 text-[16px] w-[80%]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>

                </div>
                <div>
                    <img src={ourStory} alt="" className='h-[609px] w-[609px] object-contain' />
                </div>

            </div>

        </div>
            
        </>
    )
}

export default OurStory
