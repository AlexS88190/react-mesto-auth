import React from 'react';

function Login() {
    return (
        <div className="register">
            <h1 className="register__title">Вход</h1>
            <form className="register__form">
                <input className="register__input" placeholder="Email" type="email"/>
                <input className="register__input" placeholder="Пароль" type="password"/>
                <button className="register__save-button" type="submit">Войти</button>
            </form>
            <h2 className="register__inout">Уже зарегистрированы? <span className="register__inout-button">Войти</span></h2>

            <div className="infotooltip">
                <div className="infotooltip__container">
                    <button className="infotooltip__close-button" type="button" aria-label="закрыть"/>
                    <div className="infotooltip__report infotooltip__report_successful"/>
                    <div className="infotooltip__title">Вы успешно зарегистрировались!</div>
                </div>
            </div>
       </div>

    )
}

export default Login;