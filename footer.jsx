import React from 'react';

const Footer = () => {
    return (
        <div className='w-full bg-[#2699fb] p-4'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto'>
                <div className="font-bold text-2xl flex flex-col justify-center items-center md:items-start">
                    <h1 className='text-center md:text-left'>LearnQuest</h1>
                    <br />
                    <p className='text-sm text-white font-normal text-center md:text-left'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam sapiente
                        perspiciatis atque ratione. Unde temporibus animi, explicabo quisquam odit
                        perferendis. Reiciendis omnis nobis minus a animi numquam optio at dignissimos!
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="text-sm flex flex-col items-center space-y-4">
                        <li className='font-bold pt-8'>Solutions</li>
                        <li><a href="#" className='text-white hover:text-blue-950'>Analysis</a></li>
                        <li><a href="#" className='text-white hover:text-blue-950'>Marketing</a></li>
                        <li><a href="#" className='text-white hover:text-blue-950'>Commerce</a></li>
                        <li><a href="#" className='text-white hover:text-blue-950'>Insight</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="text-sm flex flex-col items-center space-y-4">
                        <li className='font-bold pt-8 md:pt-[40px]'>Support</li>
                        <li><a href="#" className='text-white hover:text-blue-950'>Pricing</a></li>
                        <li><a href="#" className='text-white hover:text-blue-950'>Documentation</a></li>
                        <li><a href="#" className='text-white hover:text-blue-950'>Grades</a></li>
                        <li><a href="#" className='text-white hover:text-blue-950'>API Status</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="text-sm flex flex-col items-center space-y-4 pt-8 md:pt-12">
                        <li className='font-bold'>Company</li>
                        <li><a href="#" className='text-white hover:text-blue-950'>About</a></li>
                        <li><a href="#" className='text-white hover:text-blue-950'>Blog</a></li>
                        <li><a href="#" className='text-white hover:text-blue-950'>Jobs</a></li>
                        <li><a href="#" className='text-white hover:text-blue-950'>Careers</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
