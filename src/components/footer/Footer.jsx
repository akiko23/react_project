import React from "react";
import {NavLink} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <NavLink to="/" className="nav-button" activeClassName="active">
                    Главная страница
                </NavLink>
                <NavLink to="/services" className="nav-button" activeClassName="active">
                    Услуги компании
                </NavLink>
            </div>
            <div className="nav-right">
                <p className="footer-text nav-right">© 2024 Моя компания</p>
            </div>
        </footer>
    );
};

export default Footer;
