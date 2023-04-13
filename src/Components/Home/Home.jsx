import React, { useEffect } from 'react';
import Header from './../Header/Header';
import { useLoaderData } from 'react-router-dom';
import JobCategories from '../JobCategories/JobCategories';
import FeaturedJobs from './../FeaturedJobs/FeaturedJobs';
import { scrollToTop } from '../../utils';

const Home = () => {

    const categories = useLoaderData();
    
    useEffect( () => {
        scrollToTop();
    }, [] );
    

    return (
        <div>
            <div className='bg-[#F9F9FF] h-[4.25rem] md:h-[6.25rem]'>

            </div>
            <Header />
            <JobCategories categories={ categories } />
            <FeaturedJobs />
        </div>
    );
};

export default Home;