import React from 'react';
import {Link} from "react-router-dom";
import AuthForm from "./AuthForm";

function Register({ handleRegister }) {


    const [data, setData] = React.useState(
        {
            email: '',
            password: ''
        }
    );

    const [mapSignInSignOut, setMapSignInSignOut] = React.useState(
        {
            titleInOut: 'Войти',
            pathRedirect: '/sign-in',
            nameComponent: 'Регистрация',
            buttonTitleSubmit: 'Зарегистрироваться'
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
        handleRegister(email, password);
    }

    return (
        <>
            <AuthForm
                mapSignInSignOut={mapSignInSignOut}
                handleSubmit={handleSubmit}
                data={data}
                handleChange={handleChange}
            />
            <h2 className="register__inout">Уже зарегистрированы? <Link to='/sign-in' className="register__inout-link">Войти</Link></h2>
        </>
    )}

export default Register;