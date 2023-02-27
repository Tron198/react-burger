import React, { useCallback } from "react";
import styles from "./menu.module.css";
import { useDispatch } from "../../services/hooks/hooks";
import { NavLink, useLocation } from "react-router-dom";
import { userLogout } from "../../services/actions/logout";

export const Menu = () => {
  const dispatch = useDispatch();

  const logoutUser = useCallback(() => {
    dispatch(userLogout());
  }, [dispatch]);

  const { pathname } = useLocation();

  return (
    <nav className={styles.menu}>
      <NavLink
        to="/profile"
        exact={true}
        className={`${styles.link} text text_type_main-medium text_color_inactive`}
        activeClassName={styles.active}
      >
        Профиль
      </NavLink>
      <NavLink
        to="/profile/orders"
        exact={true}
        className={`${styles.link} text text_type_main-medium text_color_inactive`}
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
      {pathname === "/profile" ? (
        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете <br /> изменить свои персональные данные
        </p>
      ) : (
        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете <br /> просмотреть свою историю заказов
        </p>
      )}
    </nav>
  );
};
