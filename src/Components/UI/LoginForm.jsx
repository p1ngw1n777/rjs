import React, {useState, useDispatch} from 'react';

import axios from 'axios';
import { loginFailure, loginSuccess } from '../../Store/reducer/StatesSlice';


const LoginForm = () => {
    const [username, setUserName] = useState('');
    const [password, setUserPassword] = useState('');
    //const dispatch = useDispatch();

    const handleSubmit = async (event) => {    
        event.preventDefualt();
        try{
            const responce = await axios.post('/login', {username, password});
            alert('Good');
            /*dispatch(loginSuccess());*/
        }
        catch{
            alert('Bad');
            //dispatch(loginFailure());
        }
    }

    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setUserPassword(event.target.value);
    }

    return (
        <div>
            <div>
                <h2>Вход</h2>
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
                    <button type="submit"
                            onClick={handleSubmit}>Войти</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;