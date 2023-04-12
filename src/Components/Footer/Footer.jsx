import React from 'react';

import socialMediaIcons from '../../assets/Icons/Group 9969.png';

import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className='bg-[#1A1919]'>

            <div className='w-11/12 md:w-[85%] lg:w-[70%] py-10 md:py-24 lg:py-32 mx-auto'>

                <div className='w-full'>
                    <div className='flex flex-1 flex-wrap md:flex-nowrap md:justify-between gap-8 text-white text-opacity-70'>

                        <div className='flex flex-col gap-4 md:gap-5 md:max-w-[207px]'>
                            <h2 className='text-2xl md:text-[2rem] font-extrabold text-white'>Job Insights</h2>
                            <p className='text-sm md:text-base'>Find your next tech job with ease and gain valuable industry insights with Job Insights, the ultimate destination for job seekers in the tech field.</p>
                            <div>
                                <img src={ socialMediaIcons } alt="social media icons group" className='h-[2.625rem] object-contain cursor-pointer' title='This is just an image, no links for now.' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 md:gap-4'>
                            <h3 className='text-xl md:text-[1.25rem] font-[600] text-white'>Job Insights</h3>
                            <p className='w-max text-sm md:text-base cursor-pointer'>About Us</p>
                            <p className='w-max text-sm md:text-base cursor-pointer'>Work</p>
                            <p className='w-max text-sm md:text-base cursor-pointer'>Latest News</p>
                            <p className='w-max text-sm md:text-base cursor-pointer'>Career</p>
                        </div>

                        <div className='flex flex-col gap-2 md:gap-4 ml-20 md:ml-0'>
                            <h3 className='text-xl md:text-[1.25rem] font-[600] text-white'>Product</h3>
                            <p className='w-max text-sm md:text-base cursor-pointer'>Prototype</p>
                            <p className='w-max text-sm md:text-base cursor-pointer'>Plans & Pricing</p>
                            <p className='w-max text-sm md:text-base cursor-pointer'>Customers</p>
                            <p className='w-max text-sm md:text-base cursor-pointer'>Integrations</p>
                        </div>

                        <div className='flex flex-col gap-2 md:gap-4'>
                            <h3 className='text-xl md:text-[1.25rem] font-[600] text-white'>Support</h3>
                            <p className='w-max text-sm md:text-base cursor-pointer'>Help Desk</p>
                            <p className='w-max text-sm md:text-base cursor-pointer'>Sales</p>
                            <p className='w-max text-sm md:text-base cursor-pointer'>Become a Partner</p>
                            <p className='w-max text-sm md:text-base cursor-pointer'>Developers</p>
                        </div>

                        <div className='flex flex-col gap-2 md:gap-4 ml-20 md:ml-0'>
                            <h3 className='text-xl md:text-[1.25rem] font-[600] text-white'>Contact</h3>
                            <p className='w-max text-sm md:text-base cursor-pointer'>524 Broadway , NYC</p>
                            <p className='w-max text-sm md:text-base cursor-pointer'>+1 777 - 978 - 5570</p>
                        </div>
                    </div>
                </div>

                <hr className='w-full h-[1px] mx-auto my-6 md:my-[3.125rem] border-none outline-none bg-gradient-to-r from-[#7E90FE33] to-[#9873FF33] ' />

                <div className='flex flex-col md:flex-row items-center justify-between text-white text-opacity-40 text-xs md:text-sm gap-2 md:gap-0'>
                    <p className='flex items-center'> <BiCopyright size={14} className='hidden md:block' /> <BiCopyright size={12} className='block md:hidden' /> 2023 &nbsp;<span className='font-semibold'>Job Insights. &nbsp;</span> All Rights Reserved.</p>
                    <p>Powered by &nbsp; <span className='font-semibold cursor-pointer' onClick={ () => document.querySelector('body').scrollIntoView( { behavior: 'smooth' } ) }>Job Insights</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;