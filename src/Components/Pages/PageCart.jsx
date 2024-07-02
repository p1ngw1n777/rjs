import React, { useEffect } from 'react';
import Header from '../UI/Header';
import Menu from '../Menu';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Cart from '../UI/Cart';

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
            <Menu/>
            <Cart/>
            <Footer/>
        </div>
    );
};

export default PageCart;