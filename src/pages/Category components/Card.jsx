import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Card = () => {
  return (
    <div className='w-[20vw] h-[60vh] overflow-hidden bg-[url("/images/cardimg.jpeg")] bg-cover rounded-xl shadow-xl  cursor-pointer group'>

      <main className='w-full h-full bg-gradient-to-t from-webBlue to-[#0007] rounded-xl relative opacity-0 group-hover:opacity-100 transition-opacity duration-1000'>

        <div className='absolute top-4 right-4 p-2 cursor-pointer  bg-white rounded-full'> <FaHeart className='text-red-500' /> </div>

        <div className='absolute bottom-0 left-0 pl-4 pb-4 pr-2 w-full flex flex-col gap-3 items-start'>
          <h3 className='text-2xl'>Doctor Strange <br /> multiverse of madness</h3>
          <div className='flex justify-between w-full'>
            <div className='flex gap-1'>
            <button className='border-2 border-webGreen  text-zinc-300 font-medium flex items-center gap-1 text-xs px-5 py-1 rounded-full'>  Action </button>
            <button className='border-2 border-webGreen  text-zinc-300 font-medium flex items-center gap-1 text-xs   px-5 py-1 rounded-full'>  Thriller </button>
            </div>
            <button className='flex items-center gap-1 text-xs bg-webGreen rounded-full px-2.5'><FaStar />4.1</button>
          </div>
            <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, modi.</p>

          <button className='bg-webGreen px-3 py-2 text-sm rounded-md flex items-center gap-2'> <FaPlay /> Watch Now</button>
        </div>

      </main>

    </div>
  )
}

export default Card