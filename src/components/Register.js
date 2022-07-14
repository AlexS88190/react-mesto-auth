import React from 'react';
import {Link} from "react-router-dom";

function Register({handleRegister}) {

    const [data, setData] = React.useState(
        {
            email: '',
            password: ''
        }
    );

    const [message, setMessage] = React.useState('')

    function handleChange(event) {

        const {name, value} = event.target;
        setData((oldData) => ({
            ...oldData,
            [name]: value
        }))

    }

    function handleSubmit(event) {
        event.preventDefault();
        let { email, password } = data;
        handleRegister(email, password);
    }

    return (
        <div className="register">
            <h1 className="register__title">Регистрация</h1>
            <form className="register__form" onSubmit={handleSubmit}>
                <input name="email" className="register__input" value={data.email} onChange={handleChange}  placeholder="Email" type="email"/>
                <input name="password" className="register__input" value={data.password} onChange={handleChange} placeholder="Пароль" type="password"/>
                <button className="register__save-button" type="submit">Зарегистрироваться</button>
            </form>
            <h2 className="register__inout">Уже зарегистрированы? <Link to='/sign-in' className="register__inout-link">Войти</Link></h2>
        </div>
    )
}

export default Register;