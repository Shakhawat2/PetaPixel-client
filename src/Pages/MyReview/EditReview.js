import React, { useContext, useState } from 'react';
import { useLoaderData , useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../../Contexts/UserContext';

const EditReview = () => {
    const {user} = useContext(AuthContext)
    const review = useLoaderData();
    const navigate = useNavigate();
    const date = new Date();
    const Time = date.getTime();
    const yr = date.getFullYear();
    const mnth = date.getMonth();
    const days = date.getDate();
    const fullYear = `${yr}-${mnth + 1}-${days}`;
    const hr = date.getHours();
    const min = date.getMinutes();
    const time = `${hr} : ${min}`;

    const [newReview, setReview] = useState({})
    const handleUpdateReview = (e) =>{
        e.preventDefault();
        const latestReview = {
            ...newReview,
            email: user?.email,
            review_id: review?.review_id,
            photo: user?.photoURL,
            name: user?.displayName,
            time : Time,
            hours: hr,
            minutes: min,
            review_time: time,
            year: fullYear,
            month: mnth,
            date: days,
            servicename : review?.servicename

        }

        fetch(`https://assignment-11-server-rho.vercel.app/updatereview/${review?._id}`, {
            method : 'put',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(latestReview)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data?.modifiedCount > 0){
                toast.success('Review Updated')
                navigate('/myreview');
            }
        })
        .catch(err => console.log(err))

    }
    const getInputValue = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const Review = { ...newReview };
        Review[field] = value;
        setReview(Review);
    }
    return (
        <div className='w-[90%] mx-auto mt-5'>
            < div className=' border-l-2 border-teal-500  p-4'>
                                <form onSubmit={(e) => handleUpdateReview(e)}>
                                    <div className="col-span-full">
                                        <label className="text-lg">Review Description of <span className='text-lime-500'>{review?.servicename}</span></label><br />
                                        <textarea onBlur={(e) => getInputValue(e)} required name="description" defaultValue={review?.description} className="w-full p-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                                    </div>
                                    <div className='flex flex-col lg:flex-row items-center justify-between'>
                                        <div className="flex">
                                            <div>
                                                <label className="text-lg">Ratings</label><br />
                                                <input onBlur={(e) => getInputValue(e)} required name='rating' type="text" defaultValue={review?.rating} className="w-[100%] p-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                            </div>
                                            <div className='ml-3'>
                                                <label className="text-lg">Time</label>
                                                <input readOnly name='time' type="text" defaultValue={`${fullYear} ${time}`} className="w-[100%] p-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <button type="submit" className="btn btn-outline mt-6  rounded-md dark:border-gray-100">Update Review</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
        </div>
    );
};

export default EditReview;