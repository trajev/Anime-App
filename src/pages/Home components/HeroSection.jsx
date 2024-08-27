import React from 'react'
import Navbar from '../../components/Navbar'

const HeroSection = () => {
  return (

    <div className='w-[100%] h-[122vh] relative bg-[url("/images/hero-bg.jpeg")] bg-top bg-contain bg-no-repeat font-monteserrat'>

        <Navbar />

        <main className='pt-[15vh] w-full h-full absolute top-0 left-0 bg-gradient-to-t to-transparent from-webBlue text-white flex items-center'>


            <div className='font-medium pb-[10vw] pl-[5vw] flex flex-col items-start gap-3'>
                <h6 className='text-3xl text-webGreen '>Streaming now.......</h6>
                <h1 className='text-5xl font-bold'>Lorem ipsum dolor <br /> sit amet consectetur adipisicing</h1>
                <button className='bg-webGreen px-4 py-2 rounded-md '>View Plans</button>
            </div>

            <h2 className='font-medium flex gap-3 text-5xl absolute bottom-10 w-full justify-center'>all in one <p className='italic text-webGreen'>OTT platform</p> </h2>

        </main>


    </div>
  )
}

export default HeroSection