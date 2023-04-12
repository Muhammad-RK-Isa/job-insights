import React from 'react';

import person from '../../assets/All Images/person.png';

const Header = () => {
    return (
        <header className='bg-[#F9F9FF] pt-8 relative top-[4.25rem] md:top-[6.25rem]'>
            <div className='grid md:grid-cols-2 w-11/12 md:w-[85%] lg:w-[70%] mx-auto'>
                <div className='flex flex-col justify-center gap-6 my-auto'>
                    <h1 className='text-[#1A1919] font-extrabold text-[4rem] leading-[4.5rem] md:text-[5rem] md:leading-[6.25rem]'>One Step Closer To Your <br /> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Dream Job</span></h1>
                    <p className='text-lg text-[#757575] font-[500]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='w-max bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-lg md:text-xl font-semibold px-4 py-3 md:py-5 md:px-7 rounded-md md:rounded-lg'>
                        Get Started
                    </button>
                </div>
                <div className='p-4 md:p-0 flex items-center justify-end'>
                    <img src={ person } alt="person" />
                </div>
            </div>
        </header>
    );
};

export default Header;