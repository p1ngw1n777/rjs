import React, { useEffect } from 'react';
import Header from '../UI/Header';
import Footer from '../Footer/Footer';
import LoginForm from '../UI/LoginForm';
import { useNavigate } from 'react-router-dom';

const PageLogin = () => {
    const Navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user')) {
            Navigate('/user/cabinet');
        }
    }, [] )
    return (
        <div>
            <Header/>
            <LoginForm/>
            <Footer/>
        </div>
    )
    
};

export default PageLogin;