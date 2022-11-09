import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UserContext';
import SingleReview from './SingleReview';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyReview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myreview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
            .catch(err => console.log(err));
    }, [user?.email]);


    const handleDelete = ( id ) => {
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


                                myreviews.map(myreview => <SingleReview key={myreview._id} myreview={myreview} handleDelete={handleDelete}></SingleReview>)




                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;