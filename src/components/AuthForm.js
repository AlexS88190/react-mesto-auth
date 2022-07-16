import React from 'react';
import Header from "./Header.js";

function AuthForm({ mapSignInSignOut, handleSubmit, data, handleChange }) {

    return (
        <>
            <Header mapSignInSignOut={mapSignInSignOut} />
            <div className="register">
                <h1 className="register__title">{mapSignInSignOut.nameComponent}</h1>
                <form className="register__form" onSubmit={handleSubmit}>
                    <input name="email" className="register__input" value={data.email} onChange={handleChange}  placeholder="Email" type="email"/>
                    <input name="password" className="register__input" value={data.password} onChange={handleChange} placeholder="Пароль" type="password"/>
                    <button className="register__save-button" type="submit">{mapSignInSignOut.buttonTitleSubmit}</button>
                </form>
            </div>
        </>
    )
}

export default AuthForm