import React, { FormEventHandler } from "react";
import styles from "./pages.module.css";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "../services/hooks/hooks";
import { getUserLogin } from "../services/actions/login";
import { useForm } from "../services/hooks/useForm";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const authorization = useSelector((state) => state.getLogin.login);

  const { values, handleChange } = useForm({ email: "", password: "" });

  const handleLogin: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(getUserLogin(values.email, values.password));
  };

  if (authorization) {
    const searchParams = new URLSearchParams(window.location.search);
    return <Redirect to={searchParams.get("retpath") || "/"} />;
  }

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <h3 className="text text_type_main-medium mb-6">Вход</h3>
      <EmailInput
        onChange={handleChange}
        value={values.email}
        name={"email"}
        isIcon={false}
        extraClass="mb-6"
      />
      <PasswordInput
        onChange={handleChange}
        value={values.password}
        name={"password"}
        extraClass="mb-6"
      />
      <Button type="primary" htmlType="submit" size="medium">
        Войти
      </Button>
      <div className={`${styles.line} mt-20`}>
        <h2 className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
        </h2>
        <Link
          to="/register"
          className={`${styles.link} text text_type_main-default`}
        >
          Зарегистрироваться
        </Link>
      </div>
      <div className={`${styles.line} mt-4`}>
        <h2 className="text text_type_main-default text_color_inactive">
          Забыли пароль?
        </h2>
        <Link
          to="/forgot-password"
          className={`${styles.link} text text_type_main-default`}
        >
          Восстановить пароль
        </Link>
      </div>
    </form>
  );
};
