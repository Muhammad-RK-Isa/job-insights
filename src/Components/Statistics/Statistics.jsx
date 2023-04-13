import React, { useState } from 'react';

import headerImgLeft from '../../assets/All Images/Vector.png';
import headerImgRight from '../../assets/All Images/Vector-1.png';

import { chartData } from '../../utils/chartData';
import RadarChart from '../RadarChart/RadarChart';


const Statistics = () => {

    const [ data, setData ] = useState( {
        labels: [ 'Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Assignment 5', 'Assignment 6', 'Assignment 7', 'Assignment 8' ],
        datasets: [ {
            label: 'Assignment Results',
            data: [ 60, 60, 50, 59, 50, 29, 60, 60 ],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
        } ]
    } );

    const options = {
        scale: {
            ticks: {
                
            },
        },
    };


    return (
        <>
            <header className='h-[20rem] md:h-[25rem] grid place-content-center bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] bg-opacity-5 relative'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-3xl md:text-[2rem] font-extrabold'>Assignment Statistics</h2>
                </div>

                <img src={ headerImgLeft } alt="background image" className='w-[200px] md:w-[349px] object-contain absolute bottom-0 left-0' />
                <img src={ headerImgRight } alt="background image" className='w-[200px] md:w-[349px] object-contain absolute top-0 right-0' />
            </header>

            <div className='w-screen h-max grid place-content-center mx-auto p-4 md:p-10 mb-8'>
                <RadarChart data={ data } options={ options } />
            </div>

        </>
    );
};

export default Statistics;