import React from 'react';
import logo from "../images/logo.svg";
import {Link} from "react-router-dom";

function Header({ handleLogout, mapSignInSignOut, loggedIn, userLogin }) {
    const { titleInOut, pathRedirect } = mapSignInSignOut

    return (
        <header className="header">
            <img src={logo} alt="логотип Места России" className="header__logo"/>
            <div className="header__container">
                <h2 className="header__login">{loggedIn && userLogin}</h2>
                <Link className="header__button" onClick={loggedIn && handleLogout} to={pathRedirect}>{titleInOut}</Link>
            </div>

        </header>
    )
}

export default Header;