import React, { FormEventHandler } from "react";
import styles from "./pages.module.css";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect } from "react-router-dom";
import { createNewAccount } from "../services/actions/register";
import { useDispatch, useSelector } from "../services/hooks/hooks";
import { useForm } from "../services/hooks/useForm";

export const Registration = () => {
  const dispatch = useDispatch();
  const authorization = useSelector((state) => state.registration.success);

  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const registrationData: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(createNewAccount(values.name, values.email, values.password));
  };

  if (authorization) {
    return <Redirect to={"/login"} />;
  }

  return (
    <form className={styles.form} onSubmit={(event) => registrationData(event)}>
      <h3 className="text text_type_main-medium mb-6">Регистрация</h3>
      <Input
        onChange={handleChange}
        type={"text"}
        placeholder={"Имя"}
        value={values.name}
        name={"name"}
        extraClass="mb-6"
      />
      <EmailInput
        onChange={handleChange}
        value={values.email}
        name={"email"}
        extraClass="mb-6"
      />
      <PasswordInput
        onChange={handleChange}
        value={values.password}
        name={"password"}
        extraClass="mb-6"
      />
      <Button type="primary" htmlType="submit" size="medium">
        Зарегистрироваться
      </Button>
      <div className={`${styles.line} mt-20`}>
        <h2 className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?
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
