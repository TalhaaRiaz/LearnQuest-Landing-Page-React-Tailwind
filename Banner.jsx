import React from 'react'
import { ReactTyped } from "react-typed";


const Banner = () => {
    return (
        <div className='w-full bg-[#2699fb] py-[100px] '>
            <div className='max-w-[1240px] mx-auto text-center my-[100px]'>
                <div className=' text-xl md:text-3xl font-bold mt-4'>
                    Learn with us
                </div>
                <div className='text-white font-bold text-[50px]  md:text-[70px] '>
                    Grow with us
                </div>
                <div className=' text-[30px] md:text-[50px] text-white font-bold '>
                    Learn


                    <ReactTyped className='pl-3' strings={["Web Development", "Digital Marketing", "Ethical Hacking"]} typeSpeed={100} backSpeed={50} loop={true} />
</div>
<button type="button" className=" mt-10 inline-block focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
                    Let's get started
                </button>
 </div>
 
        </div>
    )
}

export default Banner
