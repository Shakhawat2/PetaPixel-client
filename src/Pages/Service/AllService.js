import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import { useTitle } from '../../Hooks/UseTitle';
import Loader from '../Loader/Loader';
import SingleService3 from './SingleService3';

const AllService = () => {
    const { loading } = useContext(AuthContext)
    useTitle('All Services')
    const services = useLoaderData();

    {
        if (loading) {
            return <Loader></Loader>
        }
        return <div className='my-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    services.map(service => <SingleService3 key={service?._id} service={service}></SingleService3>)
                }
            </div>
        </div>
    }
};

export default AllService;