import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [phon,setPhon] =useState("");
    const [massage,setMassage] =useState("");
    const [statemassage,setStatemassage] =useState("");
    const [typstat,setTypstat] =useState("");


   const hamdelsubmit = async (e)=>{
    e.preventDefault();
    const pylod={
        "name":name,
        "email":email,
        "PhoneNumber":phon,
        "Report":massage,
    };
    


    try{
        const respons = await fetch("https://e-commerce-production-efac.up.railway.app/Report",{
            method:"POST",
            headers:{
               "Content-Type": "application/json",
            },
            body: JSON.stringify(pylod),
            credentials:'include',
            
        });
        const result =await respons.json();
        console.log("done:",result);
        console.log(result)
        if(result.message ==='Report information saved successfully'){
            setTypstat("success");
            setStatemassage("massage sent successfully");
        } else{
            setTypstat("error");
            setStatemassage("Something went wrong");
        }
        setName("");
        setEmail("");
        setPhon("");
        setMassage("");
        setTimeout(() => {
            setStatemassage("");
            setTypstat("");
          }, 5000);
          
        
    } catch(error){
        console.log(error);
        setStatemassage("error");
        setStatemassage("Something went wrong");
        setTimeout(() => {
            setStatemassage("");
            setTypstat("");
          }, 5000);
          
   };

   }

    return (
        <>
            <div className='container mx-auto flex justify-around items-center my-28'>
                <div className='w-[340px] h-[457px] shadow-md rounded-md overflow-hidden'>
                    <div className='flex flex-col justify-center items-start h-full w-full mx-10 '>
                        <div className='flex items-center justify-start my-4 w-[270px]'>
                            <div className='h-[40px] w-[40px] bg-Secondary2 rounded-full flex justify-center items-center text-white'><IoCallOutline size={25} /></div> 
                            <p className='ml-4 text-[20px] font-medium'>Call To Us</p> 
                        </div>
                        <p className=' my-2 w-[270px]'>We are available 24/7, 7 days a week.</p>
                        <p className=' mb-2 w-[270px]'>Phone: <Link to="tel:+201008658048" className='underline hover:text-blue-600 duration-500 ease-in-out'>+21008658048</Link></p>
                        <hr className='border-black w-[270px] border-1 '/>
                        <div className='flex items-center justify-start mt-6 mb-4 w-[270px]'>
                            <div className='h-[40px] w-[40px] bg-Secondary2 rounded-full flex justify-center items-center text-white'><MdOutlineEmail size={25} /></div> 
                            <p className='ml-4 text-[20px] font-medium'>Write To US</p> 
                        </div>
                        <p className=' my-2 w-[270px]'>Fill out our form and we will contact you within 24 hours.</p>
                        <p className=' mb-2 w-[270px]'>Email: <Link to="mailto:hamzadiab500@gmail.com" className='underline hover:text-blue-600 duration-500 ease-in-out'>hamzadiab500@gmail.com</Link></p>
                        <p className=' mb-2 w-[270px]'>Email: <Link to="mailto:mohamed.moda2007@gmail.com" className='underline text-[14px] hover:text-blue-600 duration-500 ease-in-out'>mohamed.moda2007@gmail.com</Link></p>
                    </div>
                </div>
                <div className='h-[457px] w-[800px] shadow-md  rounded-md overflow-hidden'>
                    <form onSubmit={hamdelsubmit} className='flex flex-col mx-10 my-10 '>
                        <div className='flex justify-between items-center'>
                            <input 
                            required
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            type="text"  placeholder='Your Name ' className='px-4 bg-Secondary w-[235px] h-[50px] rounded-md ' />
                            <input 
                            required
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            type="email" name="" id="" placeholder='Your Email ' className='px-4 bg-Secondary w-[235px] h-[50px] rounded-md ' />
                            <input 
                            required
                            value={phon}
                            onChange={(e)=> setPhon(e.target.value)}
                            type="tel" name="" id="" placeholder='Your Phone  ' className='px-4 bg-Secondary w-[235px] h-[50px] rounded-md ' />
                        </div>
                        <textarea 
                        required
                        value={massage}
                        onChange={(e)=> setMassage(e.target.value)}
                        name="" id="" placeholder='Your Massage' className=' my-4 px-4 py-4 rounded-md bg-Secondary max-h-[230px] min-h-[230px]'></textarea>
                        <div className='flex justify-end  relative'>
                            {statemassage&&(
                                <p className={`absolute left-[50%]  translate-x-[-50%] ${typstat ==="success" ?"text-green-700":"text-red-700"}`}>{statemassage}</p>
                            )}
                            <button  type='submit' className='text-[16px] font-medium text-white bg-Secondary2 hover:bg-HoverButton duration-500 ease-in-out my-5 rounded-[4px] py-4 px-11 '>Send Massage </button></div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default Contact;
