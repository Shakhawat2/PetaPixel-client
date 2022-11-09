import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UserContext';
import Review from '../Review/Review';

const SinglePage = () => {
    const { user } = useContext(AuthContext)
    const { _id, service_id, service_name, service_photo, price, rating, description } = useLoaderData();

    const date = new Date();
    const yr = date.getFullYear();
    const mnth = date.getMonth();
    const days = date.getDate();
    const fullYear = `${yr}-${mnth + 1}-${days}`;
    const hr = date.getHours();
    const min = date.getMinutes();
    const time = `${hr} : ${min}`;

    const [review, setReview] = useState({});
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review?id=${_id}`)
            .then(res => res.json())
            .then(data => setAllReviews(data))
            .catch(err => console.log(err))
    }, [_id])


    const handleAddReview = (e) => {

        e.preventDefault();
        const latestReview = {
            ...review,
            email: user?.email,
            review_id: _id,
            photo: user?.photoURL,
            name: user?.displayName,
            hours: hr,
            minutes: min,
            review_time: time,
            year: fullYear,
            month: mnth,
            date: days,
            servicename : service_name

        }
        //Post Review
        fetch("http://localhost:5000/review", {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(latestReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    fetch(`http://localhost:5000/review?id=${_id}`)
                        .then(res => res.json())
                        .then(data => setAllReviews(data))
                        .catch(err => console.log(err))
                    toast.success('Your Review Added')
                    e.target.reset();
                }
            })
            .catch(err => console.log(err));
    }

    const getInputValue = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }
    return (
        <div className=' w-[95%] mx-auto p-10 mt-3 rounded-lg'>
            {/* service  */}
            <div className="flex max-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-1/3   bg-landscape">
                    <img src={service_photo} className="h-full" alt="" />
                </div>
                <div className="w-2/3 p-4">
                    <h1 className="text-gray-900 font-bold text-2xl whitespace-nowrap">
                        {service_name}
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        {description}
                    </p>
                    <div className="flex item-center justify-start mt-2">
                        <svg className="text-orange-600 w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                        <svg className="text-orange-600 w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                        <svg className="text-orange-600 w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                        <svg className="text-orange-600 w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                        <svg className="text-orange-600 w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                        <div className='ml-3'>
                            {rating}
                        </div>
                    </div>
                    <div className="flex item-center justify-start mt-3">
                        <h1 className="text-gray-700 font-bold text-xl">
                            ${price}
                        </h1>
                    </div>
                </div>
            </div>
            {/* review  */}
            <div className='mt-8 md:mt-10 lg:mt-16'>
                {
                    user && user?.uid
                        ?
                        <>
                            {/* review form  */}
                            < div className=' border-l-2 border-teal-500  p-4'>
                                <form onSubmit={(e) => handleAddReview(e)}>
                                    <div className="col-span-full">
                                        <label className="text-lg">Review Description</label><br />
                                        <textarea onBlur={(e) => getInputValue(e)} required name="description" placeholder="Enter Review" className="w-full p-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                                    </div>
                                    <div className='flex flex-col lg:flex-row items-center justify-between'>
                                        <div className="flex">
                                            <div>
                                                <label className="text-lg">Ratings</label><br />
                                                <input onBlur={(e) => getInputValue(e)} required name='rating' type="text" placeholder="Rating" className="w-[100%] p-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                            </div>
                                            <div className='ml-3'>
                                                <label className="text-lg">Time</label>
                                                <input readOnly name='time' type="text" defaultValue={`${fullYear} ${time}`} className="w-[100%] p-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <button type="submit" className="btn btn-outline mt-6  rounded-md dark:border-gray-100">Add Review</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* show review  */}
                            <div className='mt-10'>
                                {
                                    allReviews.length === 0
                                        ?
                                        <p className='text-2xl font-bold '>No Review Here</p>
                                        :
                                        <div>
                                            {
                                                allReviews.map(review => <Review key={review?._id} review={review}></Review>)
                                            }
                                        </div>

                                }
                            </div>
                        </>
                        :
                        <p>Please login to add a review?<Link to='/signin' className='text-orange-400'>Login</Link></p>
                }

            </div>
        </div >
    );
};

export default SinglePage;