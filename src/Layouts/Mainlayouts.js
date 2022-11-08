import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Team from '../Pages/Home/Shared/Team';
import Navbar from '../Pages/Navbar/Navbar';

const Mainlayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayouts;