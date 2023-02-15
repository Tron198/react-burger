import React, { useState } from 'react';
import styles from './pages.module.css';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLogin } from '../services/actions/login';

export function LoginPage() {

    const dispatch = useDispatch();
    const authorization = useSelector(state => state.getLogin.login);

    const [value, setValue] = useState({
        email: '',
        password: ''
    })
    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(getUserLogin(value.email, value.password));
    }

    if (authorization) {
        const searchParams = new URLSearchParams(window.location.search)
        return (<Redirect to={searchParams.get('retpath') || '/'} />)
    }

    return (
        <form className={styles.form} onSubmit={handleLogin}>
            <h1 className="text text_type_main-medium mb-6">Вход</h1>
            <EmailInput
                onChange={(event) => setValue({ ...value, email: event.target.value })}
                value={value.email}
                name={'email'}
                isIcon={false}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={(event) => setValue({ ...value, password: event.target.value })}
                value={value.password}
                name={'password'}
                extraClass="mb-6"
            />
            <Button
                type="primary"
                htmlType="submit"
                size="medium">
                Войти
            </Button>
            <div className={`${styles.line} mt-20`}>
                <h2 className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</h2>
                <Link to='/register' className={`${styles.link} text text_type_main-default`}>Зарегистрироваться</Link>
            </div>
            <div className={`${styles.line} mt-4`}>
                <h2 className="text text_type_main-default text_color_inactive">Забыли пароль?</h2>
                <Link to='/forgot-password' className={`${styles.link} text text_type_main-default`}>Восстановить пароль</Link>
            </div>
        </form>
    )
}