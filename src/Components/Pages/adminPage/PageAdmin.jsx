import React from 'react';
import Header from '../../Header/Header';
import HeaderMenu from '../../Header/headerMenu';
import Footer from '../../Footer/Footer';
import PageAdminDouble from './PageAdminDouble'

const PageAdmin = () => {
    return (
        <div>
            <Header/>
            <HeaderMenu/>
            <PageAdminDouble/>
            <Footer/>
        </div>
    );
};

export default PageAdmin;