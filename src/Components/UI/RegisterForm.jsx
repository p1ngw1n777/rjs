import React, {useState} from 'react';
import "../css/text.css"
import { userService } from '../../api/services/registration.services';

const RegisterForm = () => {
    const [username, setUserName] = useState('');
    const [password, setUserPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const responce = await userService.registration({username, password});
            alert('зареган')
        }
        catch{
            alert('y')
        }
    }

    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setUserPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    return (
        <div>
            <div className='test'>
                <label htmlFor="username">Логин:</label>
                <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={handleUsernameChange} 
                required 
                />
            </div>
            <div className='test'>
                <label htmlFor="password">Пароль:</label>
                <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={handlePasswordChange} 
                required 
                />
            </div>
            <div className='test'>
                <label htmlFor="confirmPassword">Подтвердите пароль:</label>
                <input 
                type="password" 
                id="confirmPassword" 
                value={confirmPassword} 
                onChange={handleConfirmPasswordChange} 
                required 
                />
            </div>
            <div className="test">
                <button type="submit" onClick={async (e) => await handleSubmit(e)} >Зарегистрироваться</button>
            </div>
        </div>
    );
};

export default RegisterForm;