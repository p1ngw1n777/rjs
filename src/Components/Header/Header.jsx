import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Header_style.css";
import IndexAuth from "../UI/authUI/indexAuth";


const Header = () => {
	const [inputText, setInputText] = useState("");
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	let [isLoggin, setIsLoggin] = useState(false)

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};


	const goToLogin = (event) => {
		if(localStorage.getItem('user')){
			localStorage.removeItem('user')
			localStorage.removeItem('listProducts')
			openModal();
		}
		else {
			openModal();
		}
	}

	const goToCorsina = (event) => {
		navigate('/cart')
	}

	const goToLK = (event) => {
		navigate('/user/cabinet')
	}

	const goToHome = (event) => {
		navigate('/')
	}

	useEffect(() => {
		if(localStorage.getItem('user') !== '')
		{
			setIsLoggin(true);
		}
		else {
			setIsLoggin( false );
		}
	}, [localStorage.getItem('user')]);

	const goToExit = (event) => {
		localStorage.removeItem('user')
		localStorage.removeItem('listProducts')
	}

	if(isLoggin === false) {
		return (
			<>
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
					{/*<button className="header-search-button" onClick={() => console.log(inputText)}>*/}
					{/*	<img src="" width={25} height={25} alt="nothing" />*/}
					{/*</button>*/}
					</div>
					<div className="header-login">
					<div className="login-info">
						<p className="creds-week-daily">Пн - Пт с 10:00 до 18:00</p>
						<h3 className="creds-number">+7 (495) 777-09-03</h3>
					</div>
					<button className="login-button"
							onClick={goToCorsina}>Корзина</button>
					<button className="login-button"
							onClick={goToLK}>Личный кабинет</button>
					<button className="login-button"
							onClick={goToExit}>Выйти</button>
					</div>
				</header>

		</>
	);
	}
	else {
		return (
			<>
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
					{/*<button className="header-search-button" onClick={() => console.log(inputText)}>*/}
					{/*	<img src="" width={25} height={25} alt="nothing" />*/}
					{/*</button>*/}
				</div>
				<div className="header-login">
					<div className="login-info">
						<p className="creds-week-daily">Пн - Пт с 10:00 до 18:00</p>
						<h3 className="creds-number">+7 (495) 777-09-03</h3>
					</div>
					{localStorage.getItem('user') ? (
						<>
							<button className="login-button" onClick={goToCorsina}>Корзина</button>
							<button className="login-button" onClick={goToLK}>Личный кабинет</button>
							<button className="login-button" onClick={goToExit}>Выйти</button>
						</>
					) : (
						<>
							<button className="login-button" onClick={goToLogin}>Войти</button>
						</>
					)}

				</div>
				</header>
			{isModalOpen && <IndexAuth isLogin={isLoggin} closeModal={closeModal} />}
		</>

	);
	}
};

export default Header;
