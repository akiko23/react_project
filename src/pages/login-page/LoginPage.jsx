import React from "react";
import './LoginPage.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import {Text} from "@consta/uikit/Text"

const AUTH_TOKEN_KEY_NAME = 'sber-access_token';
const REFRESH_TOKEN_KEY_NAME = 'sber-refresh_token';

export type Token = string;

export const getToken = () => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
    return token ?? '';
};

export const saveTokens = (accessToken: Token, refreshToken: Token) => {
    localStorage.setItem(AUTH_TOKEN_KEY_NAME, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY_NAME, refreshToken);
};


export const saveProfileData = (userData) => {
    localStorage.setItem('id', userData.id);
}

export const dropToken = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};

const LoginPage = () => {
    const [formData, setFormData] = React.useState({
        username: '',
        password: ''
    });    
    const [invalidInput, setInvalidInput] = useState(false);
    const [error, setError] = useState(null);


    const navigate = useNavigate();

    function updateFormData (e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            if (!formData.username || !formData.password) {
                setInvalidInput(true)
                return
            } else {
                setInvalidInput(false)
            }
            
            // emilys emilyspass
            const resp = await fetch('https://dummyjson.com/auth/login', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username: formData.username, password: formData.password, expiresInMins: 100 })
            })

            if (!resp.ok) {
                console.log(resp.status);
                console.log(formData.username, formData.password);
                throw new Error('Ошибка аутентификации');
            }

            const loginData = await resp.json()
            let [accessToken, refreshToken] = [loginData['accessToken'], loginData['refreshToken']]

            saveTokens(accessToken, refreshToken)
            
            const getMeResp = await fetch('https://dummyjson.com/auth/me', {
                method: "GET",
                headers: {'Authorization': `Bearer ${accessToken}`},
            })

            const userData = await getMeResp.json()
            
            console.log(userData)

            saveProfileData(userData)
            navigate(`/user/${userData.id}`);
            window.location.reload();
        } catch (error) {
            setError(error.message);
        }
    }

    return (
            <div className="container-login">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleSubmit}>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" name="username" className="login__input" placeholder="Логин" onChange={updateFormData}/>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" name="password" className="login__input" placeholder="Пароль" onChange={updateFormData}/>
                            </div>
                            <button className="button login__submit">
                                <span className="button__text">Войти</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                            { invalidInput ? 
                                <Text view="alert">Заполните поля</Text>
                            : null}
                            {error && <Text align="left" view="alert">{error}</Text>}
                        </form>
                    </div>
                </div>
            </div>

    )
}

export default LoginPage;