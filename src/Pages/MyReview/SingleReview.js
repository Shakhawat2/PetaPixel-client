import React, { useContext } from 'react';

import { AuthContext } from '../../Contexts/UserContext';

const SingleReview = ({ myreview, handleDelete , editDetails}) => {
    const { user } = useContext(AuthContext);
    return (
        <tr className=''>
            <th>
                <label >
                    <input onClick={() => handleDelete(myreview?._id)} type="" readOnly defaultValue="X" className=" checkbox text-center" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{user?.displayName}</div>
                        <div className="text-sm opacity-50">{user?.email}</div>
                    </div>
                </div>
            </td>
            <td>
                {myreview?.servicename}
                <br />
                <span className="badge whitespace-pre-wrap badge-ghost badge-sm">{myreview?.description}</span>
            </td>
            <td>Rating : {myreview?.rating}</td>
            
            <th onClick={() => editDetails(`${myreview?._id}`)}>
                <button  className="btn btn-ghost btn-xs">Edit</button>
            </th>
        </tr>
    );
};

export default SingleReview;