import React from 'react';
import MenuCatalogLeft from './MenuCatalogLeft';
import MenuCatalogProductsRight from './MenuCatalogProductsRight';
import '../css/MenuCatalog.css'

const MenuCatalogProducts = () => {
    return (
        
        <div className='catalogmain'>
            <MenuCatalogLeft/>
            <MenuCatalogProductsRight/>
        </div>
    );
};

export default MenuCatalogProducts;