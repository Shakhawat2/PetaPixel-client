import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService3 from './SingleService3';

const AllService = () => {
    const services = useLoaderData();
    return (
        <div className='my-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    services.map(service => <SingleService3 key={service?._id} service={service}></SingleService3>)
                }
            </div>
        </div>
    );
};

export default AllService;