import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import RegisterForm from '../../UI/authUI/RegisterForm';


const PageReg = () => {
    return (
        <div>
            <Header/>
            <RegisterForm/>
            <Footer/>
        </div>
    );
};

export default PageReg;