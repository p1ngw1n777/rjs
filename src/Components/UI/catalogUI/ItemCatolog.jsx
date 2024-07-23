import React from 'react';
import './MenuCatalog.css'

const ItemCatolog = ({title}) => {
    return (
        <>
            <div className="item-catalog">
                <a>{title}</a>
            </div>  
        </>
    );
};

export default ItemCatolog;