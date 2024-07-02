import React, { useState, useEffect } from 'react';
import "../css/ProductCard.css";

const ProductCard = ({ index, image_Url, productName, price }) => {
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        // Получение текущего количества товара из LocalStorage при монтировании компонента
        const currentProducts = JSON.parse(localStorage.getItem('listProducts')) || [];
        const existingProduct = currentProducts.find(item => item.index === index);
        if (existingProduct) {
            setQuantity(existingProduct.quantity);
        }
    }, [index]);

    const goToCorsina = async () => {
        const product = {
            index,
            image_Url,
            productName,
            price,
            quantity: 1,
        };

        // Получаем текущий список продуктов из LocalStorage
        let currentProducts = JSON.parse(localStorage.getItem('listProducts')) || [];

        // Ищем продукт в текущем списке продуктов
        const existingProductIndex = currentProducts.findIndex(item => item.index === product.index);

        if (existingProductIndex !== -1) {
            // Если продукт уже есть, увеличиваем его количество
            currentProducts[existingProductIndex].quantity += 1;
            setQuantity(currentProducts[existingProductIndex].quantity); // Обновляем состояние
        } else {
            // Если продукта нет, добавляем его с количеством 1
            currentProducts.push(product);
            setQuantity(1); // Устанавливаем количество как 1
        }

        // Обновляем LocalStorage
        localStorage.setItem('listProducts', JSON.stringify(currentProducts));

        console.log('Товар добавлен в корзину:', product);
    };

    return (
        <div key={index} className="product-card">
            <div className="product-image-container">
                <img src={image_Url} alt="Фотография товара" className="product-image" />
            </div>

            <div className="product-name">
                <p>{productName}</p>
            </div>

            <div className="product-complement">
                <div className="product-price">
                    <p>{price} ₽</p>
                </div>
                <div className="order">
                    <button className="order-btn" onClick={goToCorsina}>В корзину</button>
                </div>
                {quantity > 0 && (
                    <div className="product-quantity">
                        <p>Количество в корзине: {quantity}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;