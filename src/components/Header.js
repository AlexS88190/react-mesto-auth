import React from 'react';
import logo from "../images/logo.svg";

function Header({handleLogout}) {
    return (
        <header className="header">
            <img src={logo} alt="логотип Места России" className="header__logo"/>
            <h2 className="header__button" onClick={handleLogout}>Войти</h2>
        </header>
    )
}

export default Header;