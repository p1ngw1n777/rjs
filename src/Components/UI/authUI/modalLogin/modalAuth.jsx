import React, {useState} from 'react';
import '../modalAuthC.css';
import {useNavigate} from "react-router-dom";
import {userService} from "../../../../api/services/auth.services";

function ModalAuth ({ closeModal }) {
    const [username, setUserName] = useState('');
    const [password, setUserPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const responce = await userService.postLoginUser({username, password})
            console.log(responce.success)
            if(responce.success === true)
            {
                localStorage.setItem("user", JSON.stringify(responce.user));
                if(responce.user.role.role_name === "admin"){
                    navigate('/adminka')
                    console.log('Вы вошли под админом')
                }
                else if(responce.user.role.role_name === "user"){
                    navigate('/');
                    console.log('приятных покупок')
                }
                else{
                    navigate('/user/cabinet')
                }
            }
            else
            {
                alert('Bad')
            }

        }
        catch (error)
        {
            console.log(error)
        }
    }

    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setUserPassword(event.target.value);
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={closeModal}>&times;</span>
                <div className="login-container">
                    <div className="login-left">
                        <img src="https://dominilash.ru/upload/CMax/3f0/ftr0l3hteu750kkk1flql1ooakpy43wu/dominilash_logo.svg" alt="Logo" className="logo"  />
                    </div>
                    <div className="login-right">
                        <h2>Вход в аккаунт</h2>
                        <form className="login-form">
                            <label htmlFor="username">Логин *</label>
                            <input type="text" id="username" name="username" required value={username} onChange={handleUsernameChange} />

                            <label htmlFor="password">Пароль *</label>
                            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />

                            <div className="options">
                                <label>
                                    <input type="checkbox" id="remember" />
                                    Запомнить меня
                                </label>
                                <a href="#">Забыли пароль?</a>
                            </div>

                            <button type="submit" className="login-button" onClick={async (e) => await handleSubmit(e)}>Войти</button>
                            <a href="#" className="register-link"
                               onClick={() => window.dispatchEvent(new CustomEvent("show-register"))}>Зарегистрироваться</a>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAuth;