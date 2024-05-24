import React from 'react';
import '../css/MenuCatalog.css'

const ItemCatolog = ({title}) => {
    return (
        <>
            <div className="item-catalog">
                <a href='#'>{title}</a>
            </div>  
        </>
    );
};

export default ItemCatolog;