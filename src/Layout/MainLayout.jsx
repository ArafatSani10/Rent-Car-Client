import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/shared/Navbar/Navbar';
import Footer from '../Pages/shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;