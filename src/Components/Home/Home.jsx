import React, { useEffect } from 'react';
import Header from './../Header/Header';
import JobCategories from '../JobCategories/JobCategories';
import FeaturedJobs from './../FeaturedJobs/FeaturedJobs';
import { scrollToTop } from '../../utils';

const Home = () => {

    useEffect( () => {
        scrollToTop();
    }, [] );


    return (
        <div>
            <Header />
            <JobCategories />
            <FeaturedJobs />
        </div>
    );
};

export default Home;