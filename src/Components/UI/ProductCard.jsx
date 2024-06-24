import React from 'react';
import "../css/ProductCard.css";

const ProductCard = ({index, image_Url, productName, price}) => {
    return (
        <div key={index} className='product-card'>

            <div сlassName='product-image-container'>
                <img src={image_Url} alt='Фотография товара' className='product-image'/>
            </div>

            <div сlassName='product-name'>
                <p>{productName}</p>
            </div>

            <div сlassName='product-complement'>
                <div className='product-price'>
                    <p>{price}</p>
                </div>
                
                
                <div className='order'>
                    <button className='order-bnt'/>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;