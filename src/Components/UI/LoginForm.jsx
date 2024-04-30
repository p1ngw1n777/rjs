import React, {useState} from 'react';

import { userService } from '../../api/services/auth.services';
import { useNavigate } from 'react-router-dom';
import "../css/text.css";

const LoginForm = () => {
    const [username, setUserName] = useState('');
    const [password, setUserPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {    
        event.preventDefault();
        try{
            const responce = await userService.getUser({username, password});
            alert('Good');
        }
        catch{
            alert('Bad');
        }
    }

    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setUserPassword(event.target.value);
    }

    const toToReg = (event) => {
        navigate('/registration')
    }

    return (
        <div>
            <div className='test'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Имя пользователя:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Пароль:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        
                    
                    </div>
                    <div>
                        <button type="submit"
                            onClick={async (e) => await handleSubmit(e)}>Войти</button>
                    </div>
                    <div>
                        <a href='#'
                            onClick={toToReg}>У меня уже есть аккаунт</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;