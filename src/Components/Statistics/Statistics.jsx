import React, { useEffect, useState } from 'react';

import headerImgLeft from '../../assets/All Images/Vector.png';
import headerImgRight from '../../assets/All Images/Vector-1.png';

import RadarChart from '../RadarChart/RadarChart';
import { scrollToTop } from '../../utils';


const Statistics = () => {

    const [ data, setData ] = useState( {
        labels: [ 'Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Assignment 5', 'Assignment 6', 'Assignment 7', 'Assignment 8' ],
        datasets: [ {
            label: 'Assignment Results',
            data: [ 60, 60, 50, 59, 50, 29, 60, 60 ],
            backgroundColor: createRadialGradient( 0, 200, [
                { offset: 0, color: 'rgba( 126, 144, 254, 0.7 )' },
                { offset: 1, color: 'rgba(152, 115, 255, 0.2)' }
            ] ),
            borderColor: createLinearGradient( 0, 0, 300, 0, [
                { offset: 0, color: 'rgba( 126, 144, 254, 1 )' },
                { offset: 1, color: 'rgba(152, 115, 255, 1)' }
            ] ),
            borderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: createRadialGradient( 0, 200, [
                { offset: 0, color: 'rgba( 126, 144, 254, 0.5 )' },
                { offset: 1, color: 'rgba(152, 115, 255, 0.7)' }
            ] ),
            pointBorderColor: '#A78AFF'
        } ]
    } );


    const options = {
        scale: {
            ticks: {
                suggestedMin: 0,
                suggestedMax: 60,
                stepSize: 10,
            },
        },
    };

    function createRadialGradient ( innerRadius, outerRadius, colorStops ) {
        const canvas = document.createElement( 'canvas' );
        canvas.width = outerRadius * 2;
        canvas.height = outerRadius * 2;
        const ctx = canvas.getContext( '2d' );
        const gradient = ctx.createRadialGradient( outerRadius, outerRadius, innerRadius, outerRadius, outerRadius, outerRadius );
        colorStops.forEach( colorStop => gradient.addColorStop( colorStop.offset, colorStop.color ) );
        ctx.fillStyle = gradient;
        ctx.fillRect( 0, 0, canvas.width, canvas.height );
        return ctx.createPattern( canvas, 'no-repeat' );
    };


    function createLinearGradient ( x1, y1, x2, y2, colorStops ) {
        const canvas = document.createElement( 'canvas' );
        const ctx = canvas.getContext( '2d' );
        const gradient = ctx.createLinearGradient( x1, y1, x2, y2 );
        colorStops.forEach( colorStop => gradient.addColorStop( colorStop.offset, colorStop.color ) );
        return gradient;
    }

    useEffect( () => {
        scrollToTop();
    }, [] );
    

    return (
        <>
            <header className='h-[15rem] md:h-[25rem] grid place-content-center bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] bg-opacity-5 relative'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-3xl md:text-[2rem] font-extrabold'>Assignment Statistics</h2>
                </div>

                <img src={ headerImgLeft } alt="background image" className='w-[200px] md:w-[349px] object-contain absolute bottom-0 left-0' />
                <img src={ headerImgRight } alt="background image" className='w-[200px] md:w-[349px] object-contain absolute top-0 right-0' />
            </header>

            <div className='h-[30rem] grid place-content-center mx-auto p-4 md:p-10 mb-8'>
                <RadarChart data={ data } options={ options } />
            </div>

        </>
    );
};

export default Statistics;