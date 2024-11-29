import React from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="nav-left">
                <NavLink to="/" className="nav-button" activeClassName="active">
                    Главная страница
                </NavLink>
                <NavLink to="/services" className="nav-button" activeClassName="active">
                    Услуги компании
                </NavLink>
            </div>
            <div className="nav-right">
                <NavLink to="/profile" className="nav-button" activeClassName="active">
                    ФИО
                </NavLink>
                <NavLink to="/login" className="nav-button" activeClassName="active">
                    Вход
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
