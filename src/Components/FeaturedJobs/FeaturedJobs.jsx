import React, { useEffect, useState } from 'react';

import locationIcon from '../../assets/Icons/Frame-4.png';
import bitcoin from '../../assets/Icons/Frame.png';
import { Link } from 'react-router-dom';

const FeaturedJobs = () => {


    const [ jobs, setJobs ] = useState( [] );

    useEffect( () => {
        const getDefaultJobs = async () => {
            try {
                const response = await fetch( "jobs.JSON" );
                const data = await response.json();
                setJobs( data.slice( 0, 4 ) );
            }
            catch ( error ) {
                console.log( error );
            }
        };

        getDefaultJobs();
    }, [] );

    const handleShowAllJobs = async () => {
        try {
            const response = await fetch( 'jobs.JSON' );
            const data = await response.json();
            switch ( jobs.length === 4 ) {
                case true:
                    setJobs( data );
                    break;
                case false:
                    document.getElementById( 'featured-jobs' ).scrollIntoView( { behavior: 'smooth' } );
                    setJobs( data.slice( 0, 4 ) );
                    break;
            };
        }
        catch ( error ) {
            console.log( error );
        }
    };

    return (
        <div id='featured-jobs' className='w-11/12 md:w-[85%] lg:w-[70%] mx-auto flex flex-col items-center justify-center gap-4 my-16 md:my-24 lg:my-32'>
            <h2 className='font-extrabold text-4xl md:text-5xl text-center'>Featured Jobs</h2>
            <p className='font-[500] text-[#757575] text-center'>Explore thousands of job opportunities with all the information you need. Its your future.</p>

            <div className='grid md:grid-cols-2 gap-6 w-full'>
                { jobs.map( job => {
                    const { id, title, img, company, type, workPeriod, location, salary } = job;
                    return (
                        <div
                            key={ id }
                            className='h-64 md:h-[450px] grid gap-2 md:gap-4 p-4 md:p-6 lg:p-10 border border-[#E8E8E8] rounded-lg'
                        >
                            <div className='flex flex-col gap-1'>
                                <div>
                                    <img src={ img } alt="company image" className='max-h-14 lg:max-h-20 object-contain' />
                                </div>

                                <div className='grid md:gap-4'>
                                    <p className='text-lg md:text-2xl text-[#474747] font-bold'>{ title }</p>
                                    <p className='text-sm md:text-xl text-[#757575] font-semibold'>{ company }</p>
                                </div>

                                <div className='flex items-center gap-2 md:gap-4'>
                                    <div className='w-max px-1 md:px-2 md:py-1 border border-[#7E90FE] rounded md:rounded-md'>
                                        <p className='text-xs md:text-base font-bold md:font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent'>{ type }</p>
                                    </div>
                                    <div className='w-max px-1 md:px-2 md:py-1 border border-[#7E90FE] rounded md:rounded-md'>
                                        <p className='text-xs md:text-base font-bold md:font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent'>{ workPeriod }</p>
                                    </div>
                                </div>

                                <div className='flex gap-1 md:gap-4 items-center flex-wrap mt-2'>
                                    <div className='flex gap-1 items-center text-[#757575] text-xs font-semibold md:text-xl'>
                                        <img src={ locationIcon } alt="gps-logo" className='grayscale w-[1rem] md:w-[1.2rem] h-[1rem] md:h-[1.2rem]' />
                                        { location }
                                    </div>
                                    <div className='flex gap-1 items-center text-[#757575] text-xs font-semibold md:text-xl'>
                                        <img src={ bitcoin } alt="coin-logo" className='grayscale w-[1rem] md:w-[1.2rem] h-[1rem] md:h-[1.2rem]' />
                                        Salary : { salary }
                                    </div>
                                </div>

                            </div>

                            <Link to={ `job/${ id }` } className='w-max bg-gradient-to-r hover:bg-gradient-to-l from-[#7E90FE] to-[#9873FF] text-white text-sm md:text-lg font-semibold px-3 py-2 md:py-3 md:px-7 rounded-md md:rounded-lg mt-auto'>
                                View Details
                            </Link>

                        </div> );
                }
                ) }

            </div>

            <button
                onClick={ () => handleShowAllJobs() }
                className='w-max bg-gradient-to-r hover:bg-gradient-to-l from-[#7E90FE] to-[#9873FF] text-white text-sm md:text-lg font-semibold px-3 py-2 md:py-3 md:px-7 rounded-md md:rounded-lg mt-6'
            >
                Show { jobs.length === 4 ? "More" : "Less" }
            </button>
        </div>
    );
};

export default FeaturedJobs;