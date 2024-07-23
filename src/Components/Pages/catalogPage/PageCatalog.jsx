import React from 'react';
import Header from '../../Header/Header';
import HeaderMenu from "../../Header/headerMenu";
import Footer from '../../Footer/Footer';
import MenuCatalog from '../../UI/catalogUI/MenuCatalog';
import MenuCatalogLeft from '../../UI/catalogUI/MenuCatalogLeft';

const PageCategory = ({}) => {
    return (
        <div>
            <Header/>
            <HeaderMenu />
            <MenuCatalog/>
            <Footer/>
        </div>
    );
};

export default PageCategory;