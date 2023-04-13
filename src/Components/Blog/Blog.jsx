import React, { useEffect } from 'react';

import headerImgLeft from '../../assets/All Images/Vector.png';
import headerImgRight from '../../assets/All Images/Vector-1.png';
import { scrollToTop } from '../../utils';


const Blog = () => {
    
    useEffect(() => {
        scrollToTop();
    }, [])
    

    return (
        <>
            <header className='h-[15rem] md:h-[25rem] grid place-content-center bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] bg-opacity-5 relative'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-3xl md:text-[2rem] font-extrabold'>QnA</h2>
                </div>

                <img src={ headerImgLeft } alt="background image" className='w-[200px] md:w-[349px] object-contain absolute bottom-0 left-0' />
                <img src={ headerImgRight } alt="background image" className='w-[200px] md:w-[349px] object-contain absolute top-0 right-0' />
            </header>

            <div className='w-11/12 md:w-[85%] lg:w-[70%] mx-auto my-16'>
                <ul className='list-inside grid gap-8'>
                    <li className='list-decimal text-2xl md:text-4xl font-semibold'>
                        <p className='inline'>When should you use contextAPI?</p>
                        <p className='text-gray-500 text-lg md:text-xl mt-2 md:mt-4'>The React Context API is a way to pass data down the component tree without the need to pass props through every level of the tree. It allows me to create a global state that can be accessed by any component in your application, without having to pass data down as props from parent to child components.</p>
                    </li>
                    <li className='list-decimal text-2xl md:text-4xl font-semibold'>
                        <p className='inline'>What is a custom hook in React.js?</p>
                        <p className='text-gray-500 text-lg md:text-xl mt-2 md:mt-4'>A custom hook in React is a function that allows me to reuse logic across multiple components in your application. Custom hooks enable me to extract reusable logic from components and share it across my application.

                            Custom hooks follow a naming convention of using the use prefix in their function names, just like the built-in hooks in React. They can use other built-in hooks like useState, useEffect, useRef, and so on, to provide additional functionality.</p>
                    </li>
                    <li className='list-decimal text-2xl md:text-4xl font-semibold'>
                        <p className='inline'>What is useRef in React.js?</p>
                        <p className='text-gray-500 text-lg md:text-xl mt-2 md:mt-4'>"useRef" is a built-in hook in React that allows me to create a reference to a DOM element or to any other mutable value. The reference can be used to access and modify the current value of the element or the value of the mutable object without triggering a re-render of the component.</p>
                    </li>
                    <li className='list-decimal text-2xl md:text-4xl font-semibold'>
                        <p className='inline'>What is useMemo in React.js?</p>
                        <p className='text-gray-500 text-lg md:text-xl mt-2 md:mt-4'>"useMemo" is a built-in hook in React that allows me to memoize expensive computations so that they are only recomputed when their dependencies change. Memoization is a technique that can improve the performance of my application by avoiding unnecessary re-computations.</p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Blog;