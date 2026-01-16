import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../home/shared/navbar/Navbar';
import Footer from '../home/shared/footer/Footer';

const RootLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;