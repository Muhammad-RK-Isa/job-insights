import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import headerImgLeft from '../../assets/All Images/Vector.png';
import headerImgRight from '../../assets/All Images/Vector-1.png';
import { scrollToTop } from '../../utils';

const JobDetails = () => {

    const { jobId } = useParams();

    useEffect( () => {
        scrollToTop();
    }, [] );
    

    return (
        <>
            <header className='h-[15rem] md:h-[25rem] grid place-content-center bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] bg-opacity-5 border relative'>
                <h2 className='text-2xl md:text-[2rem] font-extrabold'>Job Details</h2>
                <img src={headerImgLeft} alt="background image" className='w-[200px] md:w-[349px] object-contain absolute bottom-0 left-0'/>
                <img src={ headerImgRight } alt="background image" className='w-[200px] md:w-[349px] object-contain absolute top-0 right-0' />
            </header>
            
            <div className='w-11/12 md:w-[85%] lg:w-[70%] my-[130px]'>
                
            </div>
        </>
    );
};

export default JobDetails;