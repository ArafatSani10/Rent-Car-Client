import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;