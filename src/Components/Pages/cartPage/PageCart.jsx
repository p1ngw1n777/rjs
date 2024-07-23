import React, { useEffect } from 'react';
import Header from '../../Header/Header';
import HeaderMenu from '../../Header/headerMenu';
import Footer from '../../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Cart from '../../UI/usersServicesUI/Cart';

const PageCart = () => {
    const Navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user') === null) {
            alert('Ты не вошёл в аккаунт! Пожалуйста войди')
            Navigate('/loginForm');
        }
    }, [] )
    return (
        <div>
            <Header/>
            <HeaderMenu/>
            <Cart/>
            <Footer/>
        </div>
    );
};

export default PageCart;