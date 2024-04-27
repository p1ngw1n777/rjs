import React from 'react';
import './css/Menu.css';


const Menu = () => {
    return (
        <div className='con'>
            <div className="catalog">
                <a href="#">Каталог</a>
            </div>
            <div className="opt">
                <a href="#">Опт и сотрудничество</a>
            </div>
            <div className="delivery">
                <a href="#">Доставка и оплата</a>
            </div>
            <div className="contaty">
                <a href="#">Контакты</a>
            </div>
        </div>
    );
};

export default Menu;