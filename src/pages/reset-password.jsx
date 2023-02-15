import React, { useState } from 'react';
import styles from './pages.module.css';
import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { confirmNewPassword } from '../services/actions/password-reset'

export function ResetPassword() {

    const authorization = useSelector(state => state.passwordReset.success);

    const dispatch = useDispatch();
    const [value, setValue] = useState({ password: '', token: '' });

    const resetData = ((event) => {
        event.preventDefault();
        dispatch(confirmNewPassword(value.password, value.token))
    })

    if (authorization) {
        return (
            <Redirect to={'/login'} />
        )
    }

    return (
        <form className={styles.form} onSubmit={(event) => resetData(event)}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
            <PasswordInput
                onChange={event => setValue({ ...value, password: event.target.value })}
                value={value.password}
                name={'password'}
                placeholder={'Введите новый пароль'}
                extraClass="mb-6"
            />
            <Input
                onChange={event => setValue({ ...value, token: event.target.value })}
                value={value.token}
                type={'text'}
                placeholder={'Введите код из письма'}
                extraClass="mb-6"
            />
            <Button
                type="primary"
                htmlType="submit"
                size="medium">
                Сохранить
            </Button>
            <div className={`${styles.line} mt-20`}>
                <h2 className="text text_type_main-default text_color_inactive">Вспомнили пароль?</h2>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
        </form>
    )
}