import React from 'react';

const News = () => {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Want to Learn Latest IT skills?</h1>
          <p className="text-white mt-2">Stay up to date with latest IT skills</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            className="p-3 rounded-md w-full md:w-auto"
            type="email"
            id="email"
            placeholder="Email"
          />
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full md:w-auto"
          >
            Let's get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
