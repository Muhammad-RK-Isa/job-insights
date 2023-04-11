import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {

    const { jobId } = useParams();

    return (
        <div className=''>
            { jobId }
        </div>
    );
};

export default JobDetails;