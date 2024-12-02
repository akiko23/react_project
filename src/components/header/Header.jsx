import React from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const currentUserID = localStorage.getItem('id')

    const handleLogOut = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <>
        {!currentUserID ? 
            <header className="header">
                <div className="nav-left">
                    <NavLink to="/" className="nav-button" activeClassName="active">
                        Главная страница
                    </NavLink>
                </div>
                <div className="nav-right">
                    <NavLink to="/login" className="nav-button" activeClassName="active">
                        Вход
                    </NavLink>
                </div>
            </header>
        : <header className="header">
            <div className="nav-left">
                <NavLink to="/" className="nav-button" activeClassName="active">
                    Главная страница
                </NavLink>
                <NavLink to="/services" className="nav-button" activeClassName="active">
                    Услуги компании
                </NavLink>
            </div>
            <div className="nav-right">
                <NavLink to={`/user/${currentUserID}`} className="nav-button" activeClassName="active">
                    Профиль
                </NavLink>
                <div onClick={handleLogOut} className="nav-button" activeClassName="active">
                    Выход
                </div>
            </div>
          </header>   
        }
        </>
    );
};

export default Header;
