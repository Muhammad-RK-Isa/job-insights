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
            <Header />
            <JobCategories categories={ categories } />
            <FeaturedJobs />
        </div>
    );
};

export default Home;