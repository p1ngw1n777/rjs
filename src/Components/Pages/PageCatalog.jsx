import React from 'react';
import Header from '../UI/Header';
import Menu from "../Menu";
import Footer from '../Footer/Footer';
import MenuCatalog from '../UI/MenuCatalog';
import MenuCatalogLeft from '../UI/MenuCatalogLeft';

const PageCategory = ({}) => {
    return (
        <div>
            <Header/>
            <Menu />
            <MenuCatalog/>
            <Footer/>
        </div>
    );
};

export default PageCategory;