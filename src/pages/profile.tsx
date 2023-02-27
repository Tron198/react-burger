import React, { useEffect } from "react";
import styles from "./pages.module.css";
import { useDispatch } from "../services/hooks/hooks";
import { getUserInfo } from "../services/actions/user";
import { Route } from "react-router-dom";
import { Menu } from "../components/menu/menu";
import { ProfileForm } from "../components/profile-form/profile-form";
import { OrdersHistoryUser } from "../components/orders-history-user/orders-history-user";
import {
  wsConnectionStartUser,
  wsConnectionClosedUser,
} from "../services/actions/wsActions";

export const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  useEffect(() => {
    dispatch(wsConnectionStartUser());
    return () => {
      dispatch(wsConnectionClosedUser());
    };
  }, []);

  return (
    <section className={styles.profile}>
      <Menu />
      <Route path="/profile" exact={true} component={ProfileForm} />
      <Route path="/profile/orders" component={OrdersHistoryUser} />
    </section>
  );
};
