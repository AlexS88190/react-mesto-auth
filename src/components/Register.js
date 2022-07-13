import React from 'react';

function Register() {
    return (
        <div className="register">
            <h1 className="register__title">Регистрация</h1>
            <form className="register__form">
                <input className="register__input" placeholder="Email" type="email"/>
                <input className="register__input" placeholder="Пароль" type="password"/>
                <button className="register__save-button" type="submit">Зарегистрироваться</button>
            </form>
            <h2 className="register__inout">Уже зарегистрированы? <span className="register__inout-button">Войти</span></h2>
        </div>
    )
}

export default Register;