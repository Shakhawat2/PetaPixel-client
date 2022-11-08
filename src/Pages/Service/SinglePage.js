import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePage = () => {
    const service = useLoaderData();
    
    return (
        <div>
            <h1>service : {service?.service_name}</h1>
        </div>
    );
};

export default SinglePage;