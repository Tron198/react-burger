import React from 'react';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useLocation } from 'react-router-dom';

function AppHeaderFunction() {

  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.headerNavigation}>
        <div className={styles.twoBlocks}>
          <NavLink
            to='/'
            exact={true}
            className={styles.link}>
            <BurgerIcon type={pathname === '/' ? "primary" : "secondary"} />
            <p className={pathname === '/'
              ? `${styles.active} text text_type_main-default`
              : `text text_type_main-default text_color_inactive`}
            >
              Конструктор
            </p>
          </NavLink>

          <a
            href='#'
            className={styles.link}>
            <ListIcon type={pathname === '#' ? "primary" : "secondary"} />
            <p className={pathname === '#'
              ? `${styles.active} text text_type_main-default`
              : `text text_type_main-default text_color_inactive`}
            >
              Лента заказов
            </p>
          </a>
        </div>

        <Logo />

          <NavLink
            to='/profile'
            exact={true}
            className={styles.link}>
            <ProfileIcon type={pathname === '/profile' ? "primary" : "secondary"} />
            <p className={pathname === '/profile'
              ? `${styles.active} text text_type_main-default`
              : `text text_type_main-default text_color_inactive`}
            >
              Личный кабинет
            </p>
          </NavLink>
      </nav>
    </header>
  )
}

export const AppHeader = React.memo(AppHeaderFunction);