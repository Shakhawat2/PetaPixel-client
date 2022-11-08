import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layouts/Mainlayouts";
import AddService from "../Pages/AddService/AddService";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
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
                path : 'services',
                loader : () => fetch("http://localhost:5000/services"),
                element : <AllService></AllService>
            },
            {
                path : 'services/:id',
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element : <SinglePage></SinglePage>
            },
            {
               path : 'signin',
               element : <Login></Login> 
            },
            {
               path : 'register',
               element : <Register></Register> 
            },
            {
                path : '/addservice',
                element : <PrivateRoutes><AddService/></PrivateRoutes>
            }
        ]
    }
])