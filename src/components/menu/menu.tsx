import React, { useCallback } from "react";
import styles from "./menu.module.css";
import { useDispatch } from "../../services/hooks/hooks";
import { NavLink } from "react-router-dom";
import { userLogout } from "../../services/actions/logout";

export const Menu = () => {
  const dispatch = useDispatch();

  const logoutUser = useCallback(() => {
    dispatch(userLogout());
  }, [dispatch]);

  return (
    <nav>
      <NavLink
        to="/profile"
        exact={true}
        className={`${styles.profileMenu} text text_type_main-medium text_color_inactive`}
        activeClassName={styles.active}
      >
        Профиль
      </NavLink>
      <NavLink
        to="/profile/orders"
        exact={true}
        className={`${styles.profileMenu} text text_type_main-medium text_color_inactive`}
        activeClassName={styles.active}
      >
        История заказов
      </NavLink>
      <button
        onClick={logoutUser}
        className={`${styles.exitButton} text text_type_main-medium text_color_inactive`}
      >
        Выход
      </button>
      <p className="text text_type_main-default text_color_inactive mt-20">
        В этом разделе вы можете <br /> изменить свои персональные данные
      </p>
    </nav>
  );
};
