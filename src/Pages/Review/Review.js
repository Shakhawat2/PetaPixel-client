import React from 'react';

const Review = ({review}) => {
    return (

        <div className="flex items-center justify-center px-5 py-5 mt-5">
            <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
                <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
                    <a href="#" className="block relative">
                        <img alt="profil" src={review?.photo} className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                </div>
                <div className="w-full mb-10">
                    
                    <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                        {review?.description}
                    </p>
                    
                </div>
                
                <div className="w-full">
                    <p className="text-md text-indigo-500 font-bold text-center">
                        {review?.name}
                    </p>
                    <p className="flex item-center justify-center mt-2">
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
                        <div className='ml-3 mt-[-2px]'>
                            {review?.rating}
                        </div>
                    </p>
                    <small className='text-amber-600'>{`Review time : ${review?.hours} : ${review?.minutes} PM`}</small>

                </div>
            </div>
        </div>

    );
};

export default Review;