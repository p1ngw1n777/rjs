import React from 'react';
import Header from '../../Header/Header';
import HeaderMenu from "../../Header/headerMenu"
import Footer from '../../Footer/Footer';
import MenuCatalogProducts from '../../UI/productsUI/productsMenu/MenuCatalogProducts';


const PageForQueryCatalog = () => {
    return (
        <div>
            <Header/>
            <HeaderMenu />
            <MenuCatalogProducts/>
            <Footer/>
        </div>
    );
};

export default PageForQueryCatalog;