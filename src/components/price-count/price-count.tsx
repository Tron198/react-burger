import React, { FC, useMemo } from "react";
import styles from "./price-count.module.css";
import CurrencyIconBig from "../../images/currency-icon-big.png";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../services/hooks/hooks";
import { TPriceCount } from "../../services/types/types";

export const PriceCount: FC<TPriceCount> = ({ onClick }) => {
  const elements = useSelector(
    (state) => state.constructorList.constructorList
  );
  const buns = useSelector((state) => state.constructorList.buns);

  const total = useMemo(
    () =>
      elements.reduce((acc, { price }) => acc + price, 0) +
      buns.reduce((acc, { price }) => acc + price, 0) * 2,
    [buns, elements]
  );

  return (
    <div className={styles.payment}>
      <div className={styles.price}>
        <p className="text text_type_digits-medium">{total}</p>
        <img src={CurrencyIconBig} alt="Значок валюты" />
      </div>
      <Button type="primary" htmlType="submit" size="large" onClick={onClick}>
        Оформить заказ
      </Button>
    </div>
  );
};
