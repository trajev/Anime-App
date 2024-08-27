import React from 'react'
import { FaPlus } from "react-icons/fa6";

function FAQ(){
  return (
    <div className='w-full px-[15vw] py-[5vh] bg-webBlue text-white flex flex-col items-center gap-10'>

      <h1 className='text-3xl'>Frequently Asked Questions</h1>

      <div className='w-[80%] flex flex-col gap-5'>
        <div className='bg-[#070611] flex w-full justify-between p-[2vw] rounded-md cursor-pointer '>
          <p className='text-xl'>What is VOD?</p>
          <FaPlus className='text-xl' />
        </div>
        <div className='bg-[#070611] flex w-full justify-between p-[2vw] rounded-md cursor-pointer'>
          <p className='text-xl'>What is VOD?</p>
          <FaPlus className='text-xl' />
        </div>
        <div className='bg-[#070611] flex w-full justify-between p-[2vw] rounded-md cursor-pointer'>
          <p className='text-xl'>What is VOD?</p>
          <FaPlus className='text-xl' />
        </div>
        <div className='bg-[#070611] flex w-full justify-between p-[2vw] rounded-md cursor-pointer'>
          <p className='text-xl'>What is VOD?</p>
          <FaPlus className='text-xl' />
        </div>
      </div>


      <div className='flex flex-col gap-4 items-center w-[60%] py-5'>
        <p className='text-xl'>Ready to watch? Start your membership.</p>
        <div className='w-full flex'>
          <input type="email" placeholder='Email address' className="px-[20px] py-[12px] rounded-l-md focus:outline-none text-black  w-[80%]" />
          <button className='px-[15px] bg-webGreen text-black py-[12px] font-medium rounded-r-md w-[20%]'>Get Started</button>
        </div>
      </div>

    </div>
  )
}

export default FAQ