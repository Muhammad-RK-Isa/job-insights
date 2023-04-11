import React from 'react';
import Header from './../Header/Header';
import { useLoaderData } from 'react-router-dom';
import JobCategories from '../JobCategories/JobCategories';
import FeaturedJobs from './../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const categories = useLoaderData();
    
    return (
        <div>
            <Header />
            <JobCategories categories={ categories } />
            <FeaturedJobs/>
        </div>
    );
};

export default Home;