import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../home/shared/navbar/Navbar';
import Footer from '../home/shared/footer/Footer';

const RootLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;