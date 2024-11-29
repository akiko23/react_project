import React from "react";
import './LoginPage.css'

const LoginPage = () => {
    const [formData, setFormData] = React.useState({
        username: '',
        password: ''
    });
    
    
    function updateFormData (e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData.username)
    }

    return (
            <div className="container-login">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleSubmit}>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" name="username" className="login__input" placeholder="Юзернейм / Почта" onChange={updateFormData}/>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" name="password" className="login__input" placeholder="Пароль" onChange={updateFormData}/>
                            </div>
                            <button className="button login__submit">
                                <span className="button__text">Войти</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>

                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>

    )
}

export default LoginPage;