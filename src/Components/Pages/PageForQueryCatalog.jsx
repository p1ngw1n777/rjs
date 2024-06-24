import React from 'react';
import Header from '../UI/Header';
import Menu from "../Menu"
import Footer from '../Footer/Footer';
import MenuCatalogProducts from '../UI/MenuCatalogProducts';


const PageForQueryCatalog = () => {
    return (
        <div>
            <Header/>
            <Menu />
            <MenuCatalogProducts/>
            <Footer/>
        </div>
    );
};

export default PageForQueryCatalog;