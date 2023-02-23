import React, { ChangeEvent, FormEventHandler } from "react";
import styles from "./pages.module.css";
import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "../services/hooks/hooks";
import { confirmNewPassword } from "../services/actions/password-reset";
import { useForm } from "../services/hooks/useForm";

export const ResetPassword = () => {
  const dispatch = useDispatch();
  const reset = useSelector((state) => state.passwordReset.success);
  const forgot = useSelector((state) => state.passwordForgot.success);

  const { values, handleChange } = useForm({ password: "", token: "" });

  const resetData: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(confirmNewPassword(values.password, values.token));
  };

  if (reset) {
    return <Redirect to={"/login"} />;
  }

  if (!forgot) {
    return <Redirect to={"/forgot-password"} />;
  }

  return (
    <form className={styles.form} onSubmit={(event) => resetData(event)}>
      <h3 className="text text_type_main-medium mb-6">Восстановление пароля</h3>
      <PasswordInput
        onChange={handleChange}
        value={values.password}
        name={"password"}
        placeholder={"Введите новый пароль"}
        extraClass="mb-6"
      />
      <Input
        onChange={handleChange}
        value={values.token}
        type={"text"}
        placeholder={"Введите код из письма"}
        extraClass="mb-6"
      />
      <Button type="primary" htmlType="submit" size="medium">
        Сохранить
      </Button>
      <div className={`${styles.line} mt-20`}>
        <h2 className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </h2>
        <Link
          to="/login"
          className={`${styles.link} text text_type_main-default`}
        >
          Войти
        </Link>
      </div>
    </form>
  );
};
