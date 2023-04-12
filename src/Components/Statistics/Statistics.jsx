import React from 'react';

import headerImgLeft from '../../assets/All Images/Vector.png';
import headerImgRight from '../../assets/All Images/Vector-1.png';
import BubbleChart from '../BubbleChart/BubbleChart';


const Statistics = () => {

    const assignmentMarks = [
        { x: 1, y: 60, r: 10 },
        { x: 2, y: 60, r: 20 },
        { x: 3, y: 50, r: 30 },
        { x: 4, y: 59, r: 40 },
        { x: 5, y: 29, r: 50 },
        { x: 6, y: 60, r: 60 },
        { x: 7, y: 60, r: 70 },
        { x: 8, y: 60, r: 80 },
    ]

    return (
        <div>
            <header className='h-[20rem] md:h-[25rem] grid place-content-center bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] bg-opacity-5 relative'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-3xl md:text-[2rem] font-extrabold'>Assignment Statistics</h2>
                </div>

                <img src={ headerImgLeft } alt="background image" className='w-[200px] md:w-[349px] object-contain absolute bottom-0 left-0' />
                <img src={ headerImgRight } alt="background image" className='w-[200px] md:w-[349px] object-contain absolute top-0 right-0' />
            </header>

            <div className='w-11/12 md:w-[85%] lg:w-[70%] mx-auto h-max'>
                {/* <BubbleChart assignmentMarks={ assignmentMarks } /> */}
            </div>
        </div>
    );
};

export default Statistics;