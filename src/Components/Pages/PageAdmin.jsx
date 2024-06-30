import React from 'react';
import Header from '../UI/Header';
import Menu from '../Menu';
import Footer from '../Footer/Footer';
import PageAdminDouble from '../Pages/PageAdminDouble'

const PageAdmin = () => {
    return (
        <div>
            <Header/>
            <Menu/>
            <PageAdminDouble/>
            <Footer/>
        </div>
    );
};

export default PageAdmin;