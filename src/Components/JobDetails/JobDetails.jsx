import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import headerImgLeft from '../../assets/All Images/Vector.png';
import headerImgRight from '../../assets/All Images/Vector-1.png';
import bitcoinIcon from '../../assets/Icons/Frame.png';
import calenderIcon from '../../assets/Icons/Frame-1.png';
import dialerIcon from '../../assets/Icons/Frame-2.png';
import messegeIcon from '../../assets/Icons/Frame-3.png';
import locationIcon from '../../assets/Icons/Frame-4.png';

import { scrollToTop } from '../../utils';

const JobDetails = () => {

    const { jobId } = useParams();

    const [ job, setJob ] = useState( {} );

    useEffect( () => {
        const getJobData = async () => {
            try {
                const res = await fetch( 'jobs.JSON' );
                const data = await res.json();
                const matchedJob = await data.find( job => job.id === jobId );
                setJob( matchedJob );
            } catch ( error ) {
                console.log( error );
            }
        };

        getJobData();
        // scrollToTop();
    }, [] );

    const { jobTitle, company, description, responsibility, educationalRequirements, experiences, salary, contactInfo } = job;


    return (
        <>
            <header className='h-[20rem] md:h-[25rem] grid place-content-center bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] bg-opacity-5 relative'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-3xl md:text-[2rem] font-extrabold'>Job Details</h2>
                    <h2 className='text-[#1A1919] text-xl md:text-2xl font-extrabold mt-4'>{ jobTitle }</h2>
                    <h2 className='text-[#1A1919] text-xl md:text-2xl font-extrabold '>at { company }</h2>
                </div>

                <img src={ headerImgLeft } alt="background image" className='w-[200px] md:w-[349px] object-contain absolute bottom-0 left-0' />
                <img src={ headerImgRight } alt="background image" className='w-[200px] md:w-[349px] object-contain absolute top-0 right-0' />
            </header>

            <div className='w-11/12 md:w-[85%] lg:w-[70%] grid md:grid-cols-3 mx-auto my-16 md:my-[130px] gap-8 md:gap-4'>

                <div className="flex flex-col gap-4 md:gap-6 md:col-span-2">
                    <p className='text-[#757575] font-[500]'><span className='font-extrabold text-[#1A1919]'>Job Description:</span>{ description }</p>
                    <p className='text-[#757575] font-[500]'><span className='font-extrabold text-[#1A1919]'>Job Responsibility:</span>{ responsibility }</p>
                    <p className='font-extrabold text-[#1A1919]'>Educational Requirements:</p>
                    <p className='text-[#757575] font-[500]'>{ educationalRequirements }</p>
                    <p className='font-extrabold text-[#1A1919]'>Experiences:</p>

                    { Array.isArray( experiences ) && experiences.map( ( experience, index ) => <p key={ index } className='text-[#757575] font-[500]'>{ experience }</p> ) }
                </div>

                <div className='grid'>

                    <div className='bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] bg-opacity-10 rounded-lg p-4 md:p-7'>
                        <p className='text-2xl text-[#1A1919] font-extrabold'>Job Details</p>
                        <hr className='border-none h-[1px] w-full bg-gradient-to-r from-[#7E90FE2e] to-[#9873FF2e] my-6' />

                        <div className="flex flex-col gap-2 mg:gap-4">
                            <p className='text-[#757575] font-bold text-sm md:text-xl'>
                                <img src={ bitcoinIcon } alt="coin icon" className='mr-1 inline' />
                                <span className='text-[#474747] font-extrabold'>Salary: </span> &nbsp;
                                { salary }
                            </p>
                            <p className='text-[#757575] font-bold text-sm md:text-xl'>
                                <img src={ calenderIcon } alt="coin icon" className='mr-1 inline' />
                                <span className='text-[#474747] font-extrabold'>Job Title: </span> &nbsp;
                                { jobTitle }
                            </p>
                        </div>

                        <p className='text-2xl text-[#1A1919] font-extrabold mt-8'>Contact Information</p>
                        <hr className='border-none h-[1px] w-full bg-gradient-to-r from-[#7E90FE2e] to-[#9873FF2e] my-6' />

                        <div className="flex flex-col gap-2 mg:gap-6">
                            { Array.isArray( contactInfo ) && contactInfo.map( (obj, index) => {
                                const { key, value } = obj;
                                let icon;
                                switch ( key ) {
                                    case 'Phone':
                                        icon = dialerIcon;
                                        break;

                                    case 'E-mail':
                                        icon = messegeIcon;
                                        break;
                                    case 'Address':
                                        icon = locationIcon;
                                        break;
                                }
                                return (
                                    <p key={index} className='text-[#757575] font-bold text-sm md:text-xl'>
                                        <img src={ icon } alt="icon" className='mr-1 inline h-min w-min' />
                                        <span className='text-[#474747] font-extrabold capitalize'>{ key }: </span> &nbsp; { value }
                                    </p>
                                );
                            } ) }
                        </div>


                    </div>

                    <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-sm md:text-xl font-semibold mt-4 py-4 md:py-5 md:px-7 rounded-md md:rounded-lg'>
                        Apply Now
                    </button>

                </div>

            </div>
        </>
    );
};

export default JobDetails;