import React, { useEffect, useState } from 'react';

import headerImgLeft from '../../assets/All Images/Vector.png';
import headerImgRight from '../../assets/All Images/Vector-1.png';
import locationIcon from '../../assets/Icons/Frame-4.png';
import bitcoin from '../../assets/Icons/Frame.png';


import { MdOutlineKeyboardArrowDown, MdFilterAltOff } from 'react-icons/md';
import { getStoredAppliedJobs, scrollToTop } from '../../utils';
import { Link } from 'react-router-dom';

const AppliedJobs = () => {

    const savedAppliedJobsId = getStoredAppliedJobs();

    const [ jobs, setJobs ] = useState( [] );

    const [ isFilterToggled, setIsFilterToggled ] = useState( false );

    const [ filter, setFilter ] = useState( {
        type: null,
        workPeriod: null
    } );

    const [ filterByType, setFilterByType ] = useState( null );

    const [ filterByWorkPeriod, setFilterByWorkPeriod ] = useState( null );



    useEffect( () => {
        const getSavedAppliedJobs = async () => {
            try {
                const res = await fetch( 'jobs.JSON' );
                const data = await res.json();
                const matchedJobs = await data.filter( job => savedAppliedJobsId.includes( job.id ) );
                if ( filter.type && filter.workPeriod ) {
                    setJobs( matchedJobs.filter( job => job.type === filter.type && job.workPeriod === filter.workPeriod ) );
                }
                else if (filter.type) {
                    setJobs( matchedJobs.filter( job => job.type === filter.type ) );
                }
                else if ( filter.workPeriod ) {
                    setJobs( matchedJobs.filter( job => job.workPeriod === filter.workPeriod ) );
                }
                else {
                    setJobs( matchedJobs );
                }
            }
            catch ( error ) {
                console.log( error );
            }
        };
        getSavedAppliedJobs();

    }, [ filter ] );



    useEffect( () => {
        const newFilter = { type: filterByType, workPeriod: filter.workPeriod };
        setFilter( newFilter );
    }, [ filterByType ] );

    useEffect( () => {
        const newFilter = { type: filter.type, workPeriod: filterByWorkPeriod };
        setFilter( newFilter );
    }, [ filterByWorkPeriod ] );



    useEffect( () => {
        scrollToTop();
    }, [] );

    return (
        <>
            <header className='h-[20rem] md:h-[25rem] grid place-content-center bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] bg-opacity-5 relative'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-3xl md:text-[2rem] font-extrabold text-[#1A1919]'>Applied Jobs</h2>
                </div>

                <img src={ headerImgLeft } alt="background image" className='w-[200px] md:w-[349px] object-contain absolute bottom-0 left-0' />
                <img src={ headerImgRight } alt="background image" className='w-[200px] md:w-[349px] object-contain absolute top-0 right-0' />
            </header>

            <div className='w-11/12 md:w-[85%] lg:w-[70%] grid mx-auto my-16 md:my-[130px] gap-8 md:gap-4 relative'>
                <button
                    onClick={ () => {
                        setFilter( { type: null, workPeriod: null } );
                        setFilterByType( null );
                        setFilterByWorkPeriod( null );
                        setIsFilterToggled( false );
                    } }
                    className={ `${ ( !filter.type && !filter.workPeriod ) ? 'hidden' : 'flex' } items-center gap-1 absolute top-0 right-28 border rounded-lg px-2 py-1` }
                >
                    <MdFilterAltOff />
                    Remove Filter
                </button>
                <div
                    className={ `${ isFilterToggled && "drop-shadow-lg" } duration-300 flex flex-col bg-white border rounded-lg absolute top-0 right-0 overflow-hidden md:cursor-pointer` }
                >
                    <div
                        onClick={ () => setIsFilterToggled( !isFilterToggled ) }
                        className={ `${ jobs.length === 0 && !isFilterToggled ? 'hidden' : 'flex' } items-center px-2 py-1 overflow-hidden bg-white z-10` }
                    >
                        Filter By
                        <MdOutlineKeyboardArrowDown size={ 24 } className={ `${ isFilterToggled && "rotate-180" } duration-300 transition-all` } />
                    </div>
                    <div className={ `${ isFilterToggled ? 'flex animate-filterToggle' : 'hidden' } flex-col ` }>

                        <label className={ `${ filterByType === 'Remote' && 'bg-gradient-to-l from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent font-semibold' } w-full text-start border-t px-2 py-1` } >
                            <input
                                type='radio'
                                name='filterByType'
                                onClick={ () => setFilterByType( 'Remote' ) }
                                className='hidden'
                            />
                            Remote
                        </label>
                        <label className={ `${ filterByType === 'Onsite' && 'bg-gradient-to-l from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent font-semibold' } w-full text-start border-t px-2 py-1` } >
                            <input
                                type='radio'
                                name='filterByType'
                                onClick={ () => setFilterByType( 'Onsite' ) }
                                className='hidden'
                            />
                            Onsite
                        </label>
                        <label className={ `${ filterByWorkPeriod === 'Full Time' && 'bg-gradient-to-l from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent font-semibold' } w-full text-start border-t px-2 py-1` } >
                            <input
                                type='radio'
                                name='filterByWorkPeriod'
                                onClick={ () => setFilterByWorkPeriod( 'Full Time' ) }
                                className='hidden'
                            />
                            Full Time
                        </label>
                        <label className={ `${ filterByWorkPeriod === 'Part Time' && 'bg-gradient-to-l from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent font-semibold' } w-full text-start border-t px-2 py-1` } >
                            <input
                                type='radio'
                                name='filterByWorkPeriod'
                                onClick={ () => setFilterByWorkPeriod( 'Part Time' ) }
                                className='hidden'
                            />
                            Part Time
                        </label>

                    </div>
                </div>

                <div className='flex flex-col gap-6 mt-16'>
                    { Array.isArray( jobs ) && jobs.map( job => {
                        const { id, img, jobTitle, company, type, workPeriod, location, salary } = job;
                        return (
                            <div key={ id } className='w-full h-[250px] md:h-[300px] grid grid-cols-3 md:grid-cols-4 border rounded-lg p-4 md:p-8'>

                                <div className='h-min'>
                                    <img src={ img } alt="" className='h-full object-contain' />
                                </div>

                                <div className='col-span-2 md:col-span-2 flex flex-col gap-1'>
                                    <p className='text-[#474747 text-xl md:text-2xl font-extrabold'>{ jobTitle }</p>
                                    <p className='text-xl md:text-2xl font-semibold text-[#757575]'>{ company }</p>

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

                                    <Link to={ `/job/${ id }` } className='md:hidden w-max bg-gradient-to-r hover:bg-gradient-to-l from-[#7E90FE] to-[#9873FF] text-white text-sm md:text-lg font-semibold px-3 py-2 md:py-3 md:px-7 rounded-md md:rounded-lg mt-auto'>
                                        View Details
                                    </Link>

                                </div>

                                <Link to={ `/job/${ id }` } className='hidden md:block  w-max bg-gradient-to-r hover:bg-gradient-to-l from-[#7E90FE] to-[#9873FF] text-white text-sm md:text-lg font-semibold px-3 py-2 md:py-3 md:px-7 rounded-md md:rounded-lg my-auto ml-auto'>
                                    View Details
                                </Link>

                            </div> );
                    } ) }
                    { jobs.length === 0 && <h2 className='w-11/12 mb-8 md:mb-10 mx-auto text-center text-2xl md:text-4xl font-extrabold text-[#1A1919]'>You have not applied to any jobs yet.</h2> }
                </div>
            </div>
        </>
    );
};

export default AppliedJobs;