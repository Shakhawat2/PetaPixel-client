import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleService3 = ({ service }) => {

    return (
        <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a href="#" className="w-full block h-full">
                <PhotoProvider>
                    <PhotoView src={service?.service_photo}>
                        <img alt="blog photo" src={service?.service_photo} className="max-h-40 w-full object-cover" />
                    </PhotoView>
                </PhotoProvider>
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        {service?.service_name}
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        {service?.description < 50 ? service?.description : service?.description.slice(0, 50) + "..."}
                    </p>
                    <div className="flex items-center mt-4">
                        <Link to={`/services/${service?._id}`}>
                            <button className='btn btn-accent'>View Details</button>
                        </Link>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default SingleService3;