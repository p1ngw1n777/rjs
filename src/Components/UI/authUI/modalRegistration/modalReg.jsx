import React, {useState} from 'react';
import {userService} from "../../../../api/services/auth.services";
import "./RegisterForm.css"

function ModalReg() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { password, confirmPassword } = formData;
        if (password !== confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }
        const username = formData.fullName;
        const email = formData.email;
        const roleId = 2;
        try{
            const responce = await userService.postRegistrationUser({username, password, email, roleId})
            console.log('success: ', responce.success)
            if(responce.success === true)
            {
                alert(responce.message);
            }
            else
            {
                alert(responce.message)
            }

        }
        catch (error)
        {
            console.log(error)
        }
    };

    return (
        <div className="container">
            <h2>Зарегистрируйтесь, чтобы использовать все возможности личного кабинета</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Логин *</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль *</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <small>Длина пароля не менее 6 символов.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Подтверждение пароля *</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            id="agree"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            required
                        />{' '}
                        Я согласен на обработку персональных данных
                    </label>
                </div>
                <button type="submit" className='button3'>Зарегистрироваться</button>
                <a href="#" className="register-link"
                   onClick={() => window.dispatchEvent(new CustomEvent("show-login"))}>У меня уже есть аккаунт</a>

            </form>
        </div>
    );
}

export default ModalReg;