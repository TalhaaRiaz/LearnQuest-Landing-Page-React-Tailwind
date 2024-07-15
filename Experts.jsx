import React from 'react';
import laptop from '../assets/laptop.jpg';

const Experts = () => {
    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg md:grid grid-cols-2 gap-8">
            <div className="flex justify-center md:justify-start items-center">
                <img className="w-full md:w-80 h-auto rounded-lg object-cover" src={laptop} alt="Laptop" />
            </div>
            <div className="flex flex-col justify-center m-2 text-center md:text-left">
                <div className="font-bold text-3xl text-green-500 mb-4">LEARN FROM EXPERTS</div>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit at assumenda porro, et, sint neque ea, eum officiis sed iste minus aperiam sunt dolorum accusantium eos facilis? Quidem dolorem, itaque eum vel perspiciatis in, id aperiam soluta cum sit hic?
                </p>
                <button 
                    type="button" 
                    className="self-center md:self-start focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    Let's get started
                </button>
            </div>
        </div>
    );
};

export default Experts;
