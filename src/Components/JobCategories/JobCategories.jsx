import React, { useEffect, useState } from 'react';

const JobCategories = (  ) => {

    const [ categories, setCategories ] = useState( [] );

    useEffect( () => {
        const getCategories = async () => {
            try {
                const response = await fetch( './jobCategories.JSON' );
                const data = await response.json();
                setCategories( data );
            }
            catch ( error ) {
                console.log( error );
            }
        };
        getCategories();
    }, [] );

    return (
        <div id='job-categories' className='w-11/12 md:w-[85%] lg:w-[70%] mx-auto flex flex-col items-center justify-center gap-4 mt-24 mb-16 lg:my-32'>
            <h2 className='font-extrabold text-4xl md:text-5xl text-center'>Job Category List</h2>
            <p className='font-[500] text-[#757575] text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
                { categories.map( (catergory, idx) => {
                    const { title, jobsCount, icon } = catergory;
                    return (
                        <div 
                            key={idx}
                            className='flex flex-col gap-1 md:gap-2 h-44 lg:h-[240px] bg-opacity-5 bg-[#7E90FE] p-4 md:p-8 lg:p-10 rounded-lg'
                        >
                            <div className='bg-gradient-to-l from-[#7E90FE1e] to-[#9873FF1e] p-2 w-max rounded-lg'>
                                <img src={ icon } alt="icon" className='w-10 h-10'/>
                            </div>
                            <h3 className='text-[#474747] md:text-xl font-extrabold mt-auto'>{ title }</h3>
                            <p className='text-[#A3A3A3] font-[500]'>{ jobsCount } Jobs Available</p>
                        </div>
                    );
                }
                ) }
            </div>

        </div>
    );
};

export default JobCategories;