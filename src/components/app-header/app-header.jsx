import React from 'react';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeaderFunction() {
  
  return (
    <header className={styles.header}>
      <nav className={styles.headerNavigation}>
        <ul className={styles.navigationList}>
          <div className={styles.twoBlocks}>
            <li className={styles.constructor}>
              <BurgerIcon type="primary" />
              <a href='#' className={`${styles.constructorText} text text_type_main-default ml-2`}>Конструктор</a>
            </li>
            <li className={styles.orders}>
              <ListIcon type="secondary" />
              <a href='#' className={`${styles.ordersText}text text_type_main-default ml-2 text_color_inactive`}>Лента заказов</a>
            </li>
          </div>
          <li className={styles.logo}>
            <Logo />
          </li>
          <li className={styles.account}>
            <ProfileIcon type="secondary" />
            <a href='#' className={`${styles.accountText}text text_type_main-default ml-2 text_color_inactive`}>Личный кабинет</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export const AppHeader = React.memo(AppHeaderFunction);