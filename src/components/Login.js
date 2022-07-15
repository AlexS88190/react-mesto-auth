import React from 'react';
import Header from "./Header.js";

function Login({ handleLogin }) {

    const [data, setData] = React.useState(
        {
            email: '',
            password: ''
        }
    );

    const [mapSignInSignOut, setMapSignInSignOut] = React.useState(
        {
            titleInOut: 'Регистрация',
            pathRedirect: '/sign-up'
        }
    );

    const [message, setMessage] = React.useState('');

    function handleChange(event) {

        const {name, value} = event.target;
        setData((oldData) => ({
            ...oldData,
            [name]: value
        }))

    }

    function handleSubmit(event) {
        event.preventDefault();
        const { email, password } = data;
        if (!email || !password) {
            return
        }
        handleLogin(email, password);
    }


    return (
        <>
            <Header mapSignInSignOut={mapSignInSignOut} />
            <div className="register">
                <h1 className="register__title">Вход</h1>
                <form className="register__form" onSubmit={handleSubmit}>
                    <input name="email" className="register__input" value={data.email} onChange={handleChange}  placeholder="Email" type="email"/>
                    <input name="password" className="register__input" value={data.password} onChange={handleChange} placeholder="Пароль" type="password"/>
                    <button className="register__save-button" type="submit">Войти</button>
                </form>
           </div>
        </>

    )
}

export default Login;