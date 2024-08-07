import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                <div className="footer-top">
                    <div className="footer-column-first">
                        <h3>О компании</h3>
                        <ul>
                            <li><a href="#">О бренде</a></li>
                            <li><a href="#">Оплата и доставка</a></li>
                            <li><a href="#">ОПТ и сотрудничество</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="footer-column-second">
                        <h3>Каталог</h3>
                        <ul>
                            <li><a href="#">Ресницы</a></li>
                            <li><a href='#'>Клей</a></li>
                            <li><a href="#">Препараты</a></li>
                            <li><a href="#">Ремуверы</a></li>
                            <li><a href="#">Пинцеты и ножницы</a></li>
                            <li><a href="#">Расходные материалы</a></li>
                            <li><a href="#">Доп Оборудование</a></li>
                        </ul>
                    </div>
                    <div className="footer-column-third">     
                        <ul>
                            <h3>Контакты</h3>
                            <li><a href="#">Расссылка</a></li>
                            <li><a href="#">+79232323233</a></li>
                            <li><a href="#">написать в WhatsApp</a></li>
                            <li><a href="#">Склад: г. Москва, Каспийская, дом 22<br/>
                            корпус 1 строение 5, офис 203</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-center">
                    <button>
                        <h1>WB</h1>
                    </button>
                    <button>
                        <h1>OZON</h1>
                    </button>
                    <button>
                        <h1>VK</h1>
                    </button>
                    <button>
                        <h1>TG</h1>
                    </button>
                    <button>
                        <h1>WA</h1>
                    </button>
                </div>
                <div className="footer-bottom">
                    <div className="copy">
                        <>2024 © DOMINI LASH</>
                    </div>
                    <div className="item-pays">
                        
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;