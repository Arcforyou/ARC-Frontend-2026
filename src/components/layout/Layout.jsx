import React, { useState } from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const MainLayout = () => {
    <>
        <Header />
        <Outlet />
        <Footer/>
    </>
}
export default MainLayout;

