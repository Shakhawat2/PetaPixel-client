import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/UserContext";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()
    const signOut = () =>{
        logOut()
        .then(() => {
            toast.success("Sign-out successful")
            navigate('/')
          }).catch((error) => {
            // An error happened.
            toast.error(error.message)
          });
    }

    return (
        <div className="px-4 py-5 shadow-xl mx-auto sm:max-w-full md:max-w-full lg:max-w-screen md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <Link
                    to="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                >
                    <img src="https://i.ibb.co/8rL8kpb/flytographer-badge-blue.png" className="w-8 text-deep-purple-accent-400" alt="" />
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                    PetaPixel
                    </span>
                </Link>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    {
                        user && user?.uid
                            ?
                            <>
                                <li>
                                    <NavLink
                                        to="/home"
                                        aria-label="Home"
                                        title="Home"
                                        className={({ isActive }) => isActive ? "bg-blue-300  p-4 rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400" : "font-medium tracking-wide text-gray-700 transition-colors duration-200  hover:text-deep-purple-accent-400"}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/blog"
                                        aria-label="Blog"
                                        title="Blog"
                                        className={({ isActive }) => isActive ? "bg-blue-300  p-4 rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400" : " font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/myreview"
                                        aria-label="My Review"
                                        title="My Review"
                                        className={({ isActive }) => isActive ? "bg-blue-300  p-4 rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400" : " font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                    >
                                        My Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/addservice"
                                        aria-label="Add Service"
                                        title="Add Service"
                                        className={({ isActive }) => isActive ? "bg-blue-300  p-4 rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400" : " font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                    >
                                        Add Service
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink
                                        to="/home"
                                        aria-label="Home"
                                        title="Home"
                                        className={({ isActive }) => isActive ? "bg-blue-300  p-4 rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400" : " font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/blog"
                                        aria-label="Blog"
                                        title="Blog"
                                        className={({ isActive }) => isActive ? "bg-blue-300  p-4 rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400" : " font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                            </>

                    }
                </ul>
                <ul className="flex items-center hidden space-x-3 lg:flex">
                    {
                        user && user?.uid
                            ?
                            <li>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL ? user?.photoURL: "https://placeimg.com/80/80/people"} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link to="/profile" className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </Link>
                                        </li>
                                        {/* <li><Link>Settings</Link></li> */}
                                        <li><Link onClick={() => signOut()}>Logout</Link></li>
                                    </ul>
                                </div>
                            </li>
                            :
                            <li>
                                <Link
                                    to="/signin"
                                    className="btn btn-outline inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    aria-label="Sign up"
                                    title="Sign up"
                                >
                                    Sign In
                                </Link>
                            </li>
                    }
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full z-10">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                            <img src="https://i.ibb.co/8rL8kpb/flytographer-badge-blue.png" className="w-8 text-deep-purple-accent-400" alt="" />
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                            PetaPixel
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        {
                                            user && user?.uid
                                                ?
                                                <>
                                                    <li>
                                                        <NavLink
                                                            to="/home"
                                                            aria-label="Home"
                                                            title="Home"
                                                            className={({ isActive }) => isActive ? "bg-blue-300 px-6 py-2 rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400" : "px-6 hover:bg-blue-300 hover:py-2 hover:rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                                        >
                                                            Home
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink
                                                            to="/blog"
                                                            aria-label="Blog"
                                                            title="Blog"
                                                            className={({ isActive }) => isActive ? "bg-blue-300  px-6 py-2 rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400" : "px-6 hover:bg-blue-300 hover:py-2 hover:rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                                        >
                                                            Blog
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink
                                                            to="/myreview"
                                                            aria-label="My Review"
                                                            title="My Review"
                                                            className={({ isActive }) => isActive ? "bg-blue-300  px-6 py-2 rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400" : "px-6 hover:bg-blue-300 hover:py-2 hover:rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                                        >
                                                            My Review
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink
                                                            to="/addservice"
                                                            aria-label="Add Service"
                                                            title="Add Service"
                                                            className={({ isActive }) => isActive ? "bg-blue-300  px-6 py-2 rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400" : "px-6 hover:bg-blue-300 hover:py-2 hover:rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                                        >
                                                            Add Service
                                                        </NavLink>
                                                    </li>
                                                </>
                                                :
                                                <>
                                                    <li>
                                                        <NavLink
                                                            to="/home"
                                                            aria-label="Home"
                                                            title="Home"
                                                            className={({ isActive }) => isActive ? "bg-blue-300  px-6 py-2 rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400" : "px-6 hover:bg-blue-300 hover:py-2 hover:rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                                        >
                                                            Home
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink
                                                            to="/blog"
                                                            aria-label="Blog"
                                                            title="Blog"
                                                            className={({ isActive }) => isActive ? "bg-blue-300  px-6 py-2 rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 text-deep-purple-accent-400" : "px-6 hover:bg-blue-300 hover:py-2 hover:rounded-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                                        >
                                                            Blog
                                                        </NavLink>
                                                    </li>
                                                </>

                                        }
                                        <li>
                                            {
                                                user && user?.uid
                                                    ?
                                                    <li className="flex justify-end">
                                                        <div className="dropdown dropdown-end">
                                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                                <div className="w-10 rounded-full flex">
                                                                    <img src={user?.photoURL ? user?.photoURL: "https://placeimg.com/80/80/people"} />
                                                                </div>
                                                            </label>
                                                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                                                <li>
                                                                    <Link to="/profile" className="justify-between">
                                                                        Profile
                                                                        <span className="badge">New</span>
                                                                    </Link>
                                                                </li>
                                                                {/* <li><Link>Settings</Link></li> */}
                                                                <li><Link onClick={() => signOut()}>Logout</Link></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    :
                                                    <li>
                                                        <Link
                                                            to="/signin"
                                                            className="btn btn-outline inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                            aria-label="Sign up"
                                                            title="Sign up"
                                                        >
                                                            Sign In
                                                        </Link>
                                                    </li>
                                            }
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Navbar;