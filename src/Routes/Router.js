import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layouts/Mainlayouts";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Pages/Home/Home";

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
        ]
    }
])