import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UserContext';
import { useTitle } from '../../Hooks/UseTitle';

const AddService = () => {
    const {user} = useContext(AuthContext);
    useTitle('Add Service')
    const [service, setService] = useState({});
    const navigate = useNavigate();
    const handleAddService = (e) =>{
        e.preventDefault();
        
        fetch("https://assignment-11-server-rho.vercel.app/services", {
            method : "post",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data?.insertedId){
                toast.success('Added a new Service')
                navigate("/services")
                e.target.reset();
            }
        })
        .catch(err => toast.error(err?.message))
    }
    const handleInput = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newService = {...service};
        newService[field] = value;
        setService(newService);
    }
    return (
        <section className="p-6 my-10 dark:bg-gray-800 dark:text-gray-50">
            <form onSubmit={(e) => handleAddService(e)} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">

                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Profile</p>
                        <div className='flex '>
                        {
                            user && user?.uid
                            ?
                            <>
                                <img src={user?.photoURL} className='rounded-full  w-12' alt="" />
                                <div className='ml-3'>
                                <p>{user?.displayName}</p>
                                <p>{user?.email}</p>
                                </div>
                            </>
                            :
                            <></>
                        }
                        </div>
                    </div>
                    <div  className=" col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Service Id</label>
                            <input required onBlur={(e) => handleInput(e)} name='service_id'  type="text" placeholder="Enter Service id" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label  className="text-sm">Service Name</label>
                            <input required onBlur={(e) => handleInput(e)} name='service_name' type="text" placeholder="Service Name" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label  className="text-sm">Service Photo</label>
                            <input required onBlur={(e) => handleInput(e)} name='service_photo' type="text" placeholder="Service Photo URL ( https:// )" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label  className="text-sm">Price</label>
                            <input required onBlur={(e) => handleInput(e)} name='price' type="text" placeholder="Service Price" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label  className="text-sm">Ratings</label>
                            <input required onBlur={(e) => handleInput(e)} name='rating' type="text" placeholder="Service Rating" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label  className="text-sm">Description</label>
                            <textarea required onBlur={(e) => handleInput(e)} name="description" placeholder="Enter Description almost about 100 word" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                        </div>
                        <div className="">
                                <button type="submit" className="btn btn-accent px-4 py-2 border rounded-md dark:border-gray-100">Add SerVice</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddService;