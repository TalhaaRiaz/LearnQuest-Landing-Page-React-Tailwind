import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='bg-[#2699fb] p-4'>
            <div className="max-w-[1240px] py-4 flex justify-between items-center mx-auto">
                <div className='text-3xl font-bold text-white'>
                LearnQuest
                </div>
                <div className="md:hidden">
                    {menuOpen ? (
                        <AiOutlineClose 
                            onClick={() => setMenuOpen(!menuOpen)} 
                            className='text-white text-2xl' 
                            aria-label="Close menu"
                        />
                    ) : (
                        <AiOutlineMenu 
                            onClick={() => setMenuOpen(!menuOpen)} 
                            className='text-white text-2xl' 
                            aria-label="Open menu"
                        />
                    )}
                </div>
                <nav>
                    <ul className='hidden md:flex gap-10 text-white'>
    <li className='hover:text-yellow-300 hover:underline'>Home</li>
    <li className='hover:text-yellow-300 hover:underline'>Company</li>
    <li className='hover:text-yellow-300 hover:underline'>Resources</li>
    <li className='hover:text-yellow-300 hover:underline'>About</li>
    <li className='hover:text-yellow-300 hover:underline'>Contact</li>
</ul>

                    <ul 
                        className={`fixed top-[96px] left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center space-y-5 transition-transform duration-500 md:hidden ${
                            menuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                    >
                        <li onClick={() => setMenuOpen(false)}>Home</li>
                        <li onClick={() => setMenuOpen(false)}>Company</li>
                        <li onClick={() => setMenuOpen(false)}>Resources</li>
                        <li onClick={() => setMenuOpen(false)}>About</li>
                        <li onClick={() => setMenuOpen(false)}>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
