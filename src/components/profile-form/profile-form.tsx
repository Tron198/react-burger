import React, { FormEventHandler, useEffect, useState } from "react";
import styles from "./profile-form.module.css";
import { patchUserInfo } from "../../services/actions/user";
import { useDispatch, useSelector } from "../../services/hooks/hooks";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const ProfileForm = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userInfo.user.name);
  const userEmail = useSelector((state) => state.userInfo.user.email);

  const [value, setValue] = useState({
    name: userName,
    email: userEmail,
    password: "",
  });

  useEffect(() => {
    setValue({
      name: userName,
      email: userEmail,
      password: "",
    });
  }, [userName, userEmail]);

  const saveInfo: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(patchUserInfo(value.name, value.email, value.password));
  };

  const cancelChanges = () => {
    setValue({
      name: userName,
      email: userEmail,
      password: "",
    });
  };

  const render =
    value.name !== userName ||
    value.email !== userEmail ||
    value.password.length >= 6;

  return (
    <form onSubmit={saveInfo}>
      <Input
        onChange={(event) => setValue({ ...value, name: event.target.value })}
        value={value.name}
        type={"text"}
        placeholder={"Имя"}
        icon={"EditIcon"}
        extraClass="mb-6"
      />
      <Input
        onChange={(event) => setValue({ ...value, email: event.target.value })}
        value={value.email}
        name={"email"}
        placeholder={"Логин"}
        icon={"EditIcon"}
        extraClass="mb-6"
      />
      <PasswordInput
        onChange={(event) =>
          setValue({ ...value, password: event.target.value })
        }
        value={value.password}
        name={"password"}
        icon={"EditIcon"}
        extraClass="mb-6"
      />
      {render ? (
        <div className={styles.buttons}>
          <Button
            onClick={cancelChanges}
            type="secondary"
            htmlType="reset"
            size="medium"
          >
            Отмена
          </Button>
          <Button type="primary" htmlType="submit" size="medium">
            Сохранить
          </Button>
        </div>
      ) : null}
    </form>
  );
};
