import React, { useState } from 'react';
import ModalAuth from "./modalLogin/modalAuth";
import ModalReg from "./modalRegistration/modalReg";
import './indexAuth.css'
function IndexAuth({ isLogin, closeModal }) {
    //const [isLogin, setIsLogin] = useState(true);
    //window.addEventListener("show-register", () => setIsLogin(false));

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={closeModal}>&times;</span>
                <div className="login-container">
                    <div className="login-left">
                        <img src="https://dominilash.ru/upload/CMax/3f0/ftr0l3hteu750kkk1flql1ooakpy43wu/dominilash_logo.svg" alt="Logo" />
                    </div>
                    {isLogin ? <ModalAuth closeModal={closeModal}/> : <ModalReg closeModal={closeModal}/>}
                </div>
            </div>
        </div>
    );
}

export default IndexAuth;