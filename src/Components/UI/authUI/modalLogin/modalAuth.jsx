import React, { useState } from 'react';
import '../indexAuth.css';
import { useNavigate } from "react-router-dom";
import { userService } from "../../../../api/services/auth.services";
import ModalReg from "../modalRegistration/modalReg";  // импортируем компонент регистрации
import { validation } from "../../../../utils/validation";

function ModalAuth({ closeModal }) {
    const [username, setUserName] = useState('');
    const [password, setUserPassword] = useState('');
    const [isRegisterMode, setIsRegisterMode] = useState(false); // состояние для переключения на регистрацию
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validation(username, password)) {
            try {
                const responce = await userService.postLoginUser({ username, password });
                if (responce.success === true) {
                    localStorage.setItem("user", JSON.stringify(responce.user));
                    if (responce.user.role.role_name === "admin") {
                        navigate('/adminka');
                        closeModal();
                    } else if (responce.user.role.role_name === "user") {
                        navigate('/');
                        closeModal();
                    } else {
                        navigate('/user/cabinet');
                        closeModal();
                    }
                } else {
                    alert('Bad');
                }

            } catch (error) {
                console.log(error);
            }
        }
        else
        {
            //
            //потом нужно сделать обработчик ошибок и красивые alert
            //
        }
    };

    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setUserPassword(event.target.value);
    };

    // Если пользователь переключился на регистрацию, рендерим ModalReg
    if (isRegisterMode) {
        return <ModalReg closeModal={closeModal} />;
    }

    return (
        <div className="login-right">
            <h2>Вход в аккаунт</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Логин *</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    value={username}
                    onChange={handleUsernameChange}
                />

                <label htmlFor="password">Пароль *</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />

                <div className="options">
                    <div>
                        <input type="checkbox" id="remember"/>
                        <span>Запомнить меня</span>
                    </div>
                    <div>
                        <a href="#">Забыли пароль?</a>
                    </div>
                </div>

                <button type="submit" className="login-button">
                    Войти
                </button>

                <a href="#" className="register-link" onClick={() => setIsRegisterMode(true)}>
                    Зарегистрироваться
                </a>
            </form>
        </div>
    );
}

export default ModalAuth;
