import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import "../css/Header_style.css";

const Header = () => {
	const [inputText, setInputText] = useState("");
	const navigate = useNavigate();
	
	const goToLogin = (event) => {
		if(localStorage.getItem('user')){
			localStorage.removeItem('user')
			navigate('/loginform');
		}
		else {
			navigate('/loginform')
		}
	}

	const goToHome = (event) => {
		navigate('/')
	}

	if(localStorage.getItem('user')) {
		return (
			<header className="header">
				<div className="header-logo">
				<h1 className="header-logo-text"
					onClick={goToHome}>DOMINI</h1>
				</div>
				<div className="header-search">
				<input
					type="text"
					className="header-search-input"
					placeholder="search"
					value={inputText}
					onChange={(e) => setInputText(inputText => inputText = e.target.value)}
				/>
				<button className="header-search-button" onClick={() => console.log(inputText)}>
					<img src="" width={25} height={25} alt="nothing" />
				</button>
				</div>
				<div className="header-login">
				<div className="login-info">
					<p className="creds-week-daily">Пн - Пт с 10:00 до 18:00</p>
					<h3 className="creds-number">+7 (495) 777-09-03</h3>
				</div>
				<button className="login-button"
						onClick={goToLogin}>Выйти</button>
				</div>
			</header>
		);
	}
	else {
		return (
			<header className="header">
			<div className="header-logo">
				<h1 className="header-logo-text"
					onClick={goToHome}>DOMINI</h1>
			</div>
			<div className="header-search">
				<input
				type="text"
				className="header-search-input"
				placeholder="search"
							value={inputText}
							onChange={(e) => setInputText(inputText => inputText = e.target.value)}
				/>
				<button className="header-search-button" onClick={() => console.log(inputText)}>
				<img src="" width={25} height={25} alt="nothing" />
				</button>
			</div>
			<div className="header-login">
				<div className="login-info">
				<p className="creds-week-daily">Пн - Пт с 10:00 до 18:00</p>
				<h3 className="creds-number">+7 (495) 777-09-03</h3>
				</div>
				<button className="login-button"
						onClick={goToLogin}>Войти</button>
			</div>
			</header>
		
		);
	}
};

export default Header;
