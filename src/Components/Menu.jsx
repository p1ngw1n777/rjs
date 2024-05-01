import React from 'react';
import './css/Menu.css';
import { useNavigate } from 'react-router-dom';


const Menu = () => {

    const Navigate = useNavigate();

    const goToCatalog = (event) => {
        Navigate('/catalog')
    }
    
    const goToOpt = (event) => {
        Navigate('/opt')
    }

    const goToDelivery = (event) => {
        Navigate('/delivery')
    }

    const goToContacty = (event) => {
        Navigate('/contacty')
    }


    return (
        <div className='con'>
            <div className="catalog">
                <a href="#"
                    onClick={goToCatalog}>Каталог</a>
            </div>
            <div className="opt">
                <a href="#"
                    onClick={goToOpt}>Опт и сотрудничество</a>
            </div>
            <div className="delivery">
                <a href="#"
                    onClick={goToDelivery}>Доставка и оплата</a>
            </div>
            <div className="contaty">
                <a href="#"
                    onClick={goToContacty}>Контакты</a>
            </div>
        </div>
    );
};

export default Menu;