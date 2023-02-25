import React, { FC, MouseEvent, useMemo } from "react";
import styles from "./ingredient-card.module.css";
import { useDrag } from "react-dnd";
import { useSelector, useDispatch } from "../../services/hooks/hooks";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { setIngredientDetails } from "../../services/actions/ingredient-details";
import { TIngredientCard } from "../../services/types/types";
import { Link, useLocation } from "react-router-dom";

export const IngredientCard: FC<TIngredientCard> = ({ ingredient }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const elements = useSelector(
    (state) => state.constructorList.constructorList
  );
  const buns = useSelector((state) => state.constructorList.buns);

  const count = useMemo(
    () =>
      elements.filter((element) => element._id === ingredient._id).length ||
      buns.filter((element) => element._id === ingredient._id).length * 2,
    [buns, elements, ingredient._id]
  );

  const [, dragIngredient] = useDrag(
    () => ({
      type: "card",
      item: {
        ingredient,
        id: ingredient._id,
        type: ingredient.type,
      },
    }),
    []
  );

  const handleIngredientClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(setIngredientDetails(ingredient));
  };

  return (
    <>
      <button
        className={styles.cardButton}
        onClick={handleIngredientClick}
        ref={dragIngredient}
      >
        <Link
          to={{
            pathname: `/ingredients/${ingredient._id}`,
            state: { background: location },
          }}
        >
          <img src={ingredient.image} alt={ingredient.name} />
        </Link>
        {count > 0 ? <Counter count={count} size="small" /> : null}
        <div className={styles.price}>
          <p className="text text_type_digits-default pt-2 pr-2">
            {ingredient.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className="text text_type_main-default pt-2">{ingredient.name}</h3>
      </button>
    </>
  );
};
