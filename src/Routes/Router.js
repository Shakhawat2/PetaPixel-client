import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layouts/Mainlayouts";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import EditReview from "../Pages/MyReview/EditReview";
import MyReview from "../Pages/MyReview/MyReview";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import AllService from "../Pages/Service/AllService";
import SinglePage from "../Pages/Service/SinglePage";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Mainlayouts></Mainlayouts>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'home',
                element : <Home></Home>
            },
            {
                path : 'myreview',
                element : <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path : 'services',
                element : <AllService></AllService>
            },
            {
                path : '/myreview/:id',
                loader : ({params}) => fetch(`https://assignment-11-server-rho.vercel.app/myreview/${params.id}`),
                element : <PrivateRoutes><EditReview></EditReview></PrivateRoutes>
            },
            {
                path : 'services/:id',
                loader : ({params}) => fetch(`https://assignment-11-server-rho.vercel.app/services/${params.id}`),
                element : <SinglePage></SinglePage>
            },
            {
               path : 'signin',
               element : <Login></Login> 
            },
            {
               path : 'profile',
               element : <PrivateRoutes><Profile></Profile></PrivateRoutes> 
            },
            {
               path : 'register',
               element : <Register></Register> 
            },
            {
                path : '/addservice',
                element : <PrivateRoutes><AddService/></PrivateRoutes>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            }
        ]
    }
])