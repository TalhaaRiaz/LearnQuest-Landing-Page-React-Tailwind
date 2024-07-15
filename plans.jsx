import React from 'react';

const Plans = () => {
  return (
    <div className='py-8 md:py-[100px]'>
      <div className='grid grid-cols-1 md:grid-cols-3 max-w-[1240px] mx-auto gap-4'>
        <div className='shadow-xl p-6 h-[400px] md:h-[500px] hover:scale-105 duration-500 bg-white'>
          <h1 className='text-2xl font-bold'>Web Development</h1>
          <h2 className='text-xl font-semibold my-4'>$148</h2>
          <p className='text-gray-700 mb-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae in molestias aliquam placeat quia, cumque, nisi officia nihil enim ex dolorem ea! Odio modi inventore quo magni veritatis eaque sequi!
          </p>
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full md:w-auto"
          >
            Start Trial
          </button>
        </div>

        <div className='shadow-xl p-6 h-[400px] md:h-[500px] hover:scale-105 duration-500 bg-gray-100'>
          <h1 className='text-2xl font-bold'>Digital Marketing</h1>
          <h2 className='text-xl font-semibold my-4'>$120</h2>
          <p className='text-gray-700 mb-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae in molestias aliquam placeat quia, cumque, nisi officia nihil enim ex dolorem ea! Odio modi inventore quo magni veritatis eaque sequi!
          </p>
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full md:w-auto"
          >
            Start Trial
          </button>
        </div>

        <div className='shadow-xl p-6 h-[400px] md:h-[500px] hover:scale-105 duration-500 bg-white'>
          <h1 className='text-2xl font-bold'>Ethical Hacking</h1>
          <h2 className='text-xl font-semibold my-4'>$169</h2>
          <p className='text-gray-700 mb-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae in molestias aliquam placeat quia, cumque, nisi officia nihil enim ex dolorem ea! Odio modi inventore quo magni veritatis eaque sequi!
          </p>
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full md:w-auto"
          >
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plans;
