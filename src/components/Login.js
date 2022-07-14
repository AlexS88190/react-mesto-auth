import React from 'react';

function Login({handleLogin}) {

    const [data, setData] = React.useState(
        {
            email: '',
            password: ''
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
        <div className="register">
            <h1 className="register__title">Вход</h1>
            <form className="register__form" onSubmit={handleSubmit}>
                <input name="email" className="register__input" value={data.email} onChange={handleChange}  placeholder="Email" type="email"/>
                <input name="password" className="register__input" value={data.password} onChange={handleChange} placeholder="Пароль" type="password"/>
                <button className="register__save-button" type="submit">Войти</button>
            </form>
       </div>

    )
}

export default Login;