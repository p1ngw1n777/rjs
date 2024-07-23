import React from 'react';
import MenuCatalogLeft from '../../catalogUI/MenuCatalogLeft';
import MenuCatalogProductsRight from './MenuCatalogProductsRight';
import '../../catalogUI/MenuCatalog.css'

const MenuCatalogProducts = () => {
    return (
        
        <div className='catalogmain'>
            <MenuCatalogLeft/>
            <MenuCatalogProductsRight/>
        </div>
    );
};

export default MenuCatalogProducts;