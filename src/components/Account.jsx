import React from 'react'
import { useAuth } from './AuthContext'

const Account = () => {
    const {useremail,cartfetch,username,logout,Changepassword,error,setOldpassword,setNewpassword,oldpassword,newpassword} =useAuth();
    return (
        <>
        <div className='container mx-auto  flex justify-center items-center relative'>
            <p className=' absolute top-[30px]  right-[20%] text-[16px] font-medium '>Welcome! <span className='text-Secondary2'> {username}</span></p>
        <button className='absolute top-[30px]  left-[20%] text-[16px] font-medium rounded-lg py-2 px-4 bg-Secondary2 hover:bg-HoverButton duration-300 ease-in-out text-white' onClick={logout} >logout</button>
            <div className='w-[870px]  rounded-md shadow-md border-t my-28'>
                
                
                <div className='px-10 py-10 '>
                    <p className='text-[20px] font-medium text-Secondary2 py-10'>Edit Your Profile</p>
                    <div className='flex justify-between'>
                       <div className='w-[40%]'>
                        <p className='my-2 text-[18px] font-medium'>Name</p>
                         <p className='py-2 px-4 bg-Secondary rounded-md text-[#4e4e4e]'>{username}</p>
                        </div>
                        <div className='w-[40%]'>
                            <p className='my-2 text-[18px] font-medium'>Email</p>
                            <p className='py-2 px-4 bg-Secondary rounded-md text-[#4e4e4e]'>{useremail}</p>
                        </div>
                        
                        
                    </div>
                    <form onSubmit={Changepassword} className='my-10 w-full'>
                     <p className='text-[20px]'>Password Changes</p>
                     <input value={oldpassword}
                     onChange={(e)=>setOldpassword(e.target.value)}
                     type="text"
                     required
                     placeholder='Old Passwod' className='py-2 px-4 bg-Secondary rounded-md text-[#4e4e4e] w-full my-4' />
                     <input value={newpassword}
                     onChange={(e)=>setNewpassword(e.target.value)}
                     type="text"
                     required
                     placeholder='New Passwod' className='py-2 px-4 bg-Secondary rounded-md text-[#4e4e4e] w-full my-4' />

                     {error&& <p className='text-center text-red-600'>{error}</p>}
                     <div className='flex justify-end items-center gap-16'>
                        <button  className='text-[16px] font-medium text-white bg-Secondary2 hover:bg-HoverButton duration-500 ease-in-out my-5 rounded-[4px] py-3 px-11 ' type="submit">Save Changes</button>
                     </div>
                    </form>
                    

                </div>
                

            </div>
        </div>
            
        </>
    )
}

export default Account
