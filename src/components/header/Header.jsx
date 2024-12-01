import React from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';
import { getToken } from "../../pages/login-page/LoginPage";

const Header = () => {
    let profileButtonNavTo;
    const currentUserID = localStorage.getItem('id')
    if (!currentUserID) {
        profileButtonNavTo = '/login';
    } else {
        profileButtonNavTo = `/user/${currentUserID}`;
    }

    return (
        <>
        {!currentUserID ? 
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
                <NavLink to="/logout" className="nav-button" activeClassName="active">
                    Выход
                </NavLink>
            </div>
          </header>   
        }
        </>
    );
};

export default Header;
