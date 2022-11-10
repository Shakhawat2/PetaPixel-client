import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/UserContext';

const Banner = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold ">WelCome <br /><span className='text-teal-400 whitespace-nowrap'>{user?.displayName}</span></h1>
                    <p className="mb-5">Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;