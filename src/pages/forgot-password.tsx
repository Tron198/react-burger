import styles from './pages.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { createNewPassword } from '../services/actions/password-forgot';
import { useDispatch, useSelector } from '../services/hooks/hooks';
import { FormEventHandler } from 'react';
import { useForm } from '../services/hooks/useForm';

export const ForgotPassword = () => {

    const dispatch = useDispatch();
    const forgot = useSelector(state => state.passwordForgot.success);
    const {values, setValues} = useForm({ email: '' });

    const emailData: FormEventHandler = (event)  => {
        event.preventDefault();
        dispatch(createNewPassword(values.email));
    }

    if (forgot) {
        return (<Redirect to={'/reset-password'} />)
    }

    return (
        <form className={styles.form} onSubmit={(event) => emailData(event)}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
            <Input
                onChange={(evt) => setValues({ ...values, email: evt.target.value })}
                value={values.email}
                name={'email'}
                placeholder={'Укажите e-mail'}
                extraClass="mb-6"
            />
            <Button
                type="primary"
                htmlType="submit"
                size="medium">
                Восстановить
            </Button>
            <div className={`${styles.line} mt-20`}>
                <h2 className="text text_type_main-default text_color_inactive">Вспомнили пароль?</h2>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
        </form>
    )
}