import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UserContext';
import { useTitle } from '../../Hooks/UseTitle';
import Loader from '../Loader/Loader';
import SingleService3 from './SingleService3';

const AllService = () => {
    const { loading } = useContext(AuthContext)
    useTitle('Services of')
    // const { services, count } = useLoaderData();
    const [services, setServices] = useState([])
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(5);


    useEffect(() => {
        fetch(`http://localhost:5000/services?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.services)
                setCount(data.count)
            })
            .catch(err => console.log(err))
    }, [page, size])

    const pages = Math.ceil(count / size);


    if (loading) {
        return <Loader></Loader>
    }
    return <div className='my-14'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {
                services.map(service => <SingleService3 key={service?._id} service={service}></SingleService3>)
            }
        </div>
        <div className='text-center mt-10'>
            {
                [...Array(pages).keys()].map(number => <button
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? 'btn btn-sm btn-warning m-3' : 'btn btn-sm btn-accent m-3'}
                >
                    {number + 1}
                </button>)
            }
            <select onChange={(e) => setSize(e.target.value)}>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
        </div>
    </div>

};

export default AllService;