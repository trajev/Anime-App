import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { TbWorld } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-webBlue  px-[15vw] py-[10vh] text-zinc-400 flex flex-col gap-10'>

      <p className='text-webGreen text-xl'>Questions? Call 1-844-505-2993</p>

      <div className='flex justify-between items-center'>

        <div className='flex flex-col gap-3 '>
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Only on Netflix</a>
        </div>

        <div className='flex flex-col gap-3 ' >
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </div>

        <div className='flex flex-col gap-3' >
          <a href="#">Account</a>
          <a href="#">Redeem Gift Cards</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
        </div>

        <div className='flex flex-col gap-3 ' >
          <a href="#">Media Center</a>
          <a href="#">Buy Gift Cards</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Legal Notices</a>
        </div>





      </div>

      <div className='flex items-center justify-between'>
        <button className='border border-zinc-500 text-zinc-400 flex items-center gap-1 text-xl px-3 py-2 rounded-md'> <TbWorld /> English <TiArrowSortedDown /> </button>
        <div className='text-white text-4xl flex gap-5'>
          <FaFacebook className='cursor-pointer' />
          <FaTwitter className='cursor-pointer' />
          <FaInstagram className='cursor-pointer' />
        </div>
      </div>

      <p className='text-webGreen text-xl'>VOD India</p>

    </div>
  )
}

export default Footer