import React from 'react';
import AuthForm from "./AuthForm.js";

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
            pathRedirect: '/sign-up',
            nameComponent: 'Вход',
            buttonTitleSubmit: 'Войти'
        }
    );

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
        <AuthForm
            mapSignInSignOut={mapSignInSignOut}
            handleSubmit={handleSubmit}
            data={data}
            handleChange={handleChange}
        />
    )
}

export default Login;