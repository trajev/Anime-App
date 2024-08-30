import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='h-[15vh] bg-transparent text-white font-semibold flex items-center justify-between absolute top-0 left-0 w-full px-[5vw] z-10'>

      <div className='flex items-center gap-10'>

        <h2 className='text-4xl cursor-pointer'>V<span className='text-webGreen'>O</span>D</h2>
        <ul className='flex items-center gap-5 font-medium'>
          <Link to="/" className='border-b-2 border-transparent hover:border-webGreen cursor-pointer'>Home</Link>
          <Link to="/categories" className='border-b-2 border-transparent hover:border-webGreen flex items-center gap-1 cursor-pointer'>Categories <IoIosArrowDown /> </Link>
        </ul>
      </div>


      <div className='flex gap-3 items-center'>

        <IoSearch className='text-2xl cursor-pointer' />
        <RiAccountCircleLine className='text-2xl cursor-pointer' />
        <button className=' px-5 py-2 hover:bg-opacity-30 bg-zinc-50 bg-opacity-20 text-white rounded-md font-medium'>Log Out</button>


      </div>

    </div>
  )
}

export default Navbar