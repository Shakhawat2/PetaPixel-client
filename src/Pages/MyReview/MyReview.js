import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UserContext';
import { useTitle } from '../../Hooks/UseTitle';
import Loader from '../Loader/Loader';
import SingleReview from './SingleReview';

const MyReview = () => {
    const { user, loading , logOut} = useContext(AuthContext);
    const [myreviews, setMyReview] = useState([])
    const navigate = useNavigate();
    useTitle('My Review')
    useEffect(() => {
        fetch(`http://localhost:5000/myreview?email=${user?.email}`, {
            headers : {
                authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    logOut();
                }
                return res.json()
            })
            .then(data => setMyReview(data))
            .catch(err => console.log(err));
    }, [user?.email, logOut]);

    const editDetails = (id) => {
        navigate(`/myreview/${id}`)
    }
    const handleDelete = (id) => {
        const proceed = window.confirm('Do you Deleted this review')
        if (proceed) {
            fetch(`http://localhost:5000/myreview/${id}`, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully');
                        fetch(`http://localhost:5000/myreview?email=${user?.email}`)
                            .then(res => res.json())
                            .then(data => setMyReview(data))
                            .catch(err => console.log(err));
                    }
                })
                .catch(err => console.log(err))
        }
    }

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className='w-[90%] mx-auto mt-5'>
            <div className="overflow-x-auto w-full ">
                <table className="table w-full">
                    <tbody>
                        {

                            myreviews?.length === 0
                                ?
                                <p className='text-2xl text-center font-semibold text-red-400'>No reviews were added</p>
                                :


                                myreviews.map(myreview => <SingleReview key={myreview._id} myreview={myreview} handleDelete={handleDelete} editDetails={editDetails}></SingleReview>)




                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;