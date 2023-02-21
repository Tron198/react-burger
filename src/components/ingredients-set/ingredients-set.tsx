import React, { FC } from "react";
import styles from "./ingredients-set.module.css";
import { useSelector } from "../../services/hooks/hooks";
import { IngredientCard } from "../ingredient-card/ingredient-card";
import { TIngredientsSet } from "../../services/types/types";

export const IngredientsSet: FC<TIngredientsSet> = React.forwardRef(
  ({ type, title, refElement }, ref) => {
    const ingredients = useSelector(
      (state) => state.ingredientsList.ingredientsList
    );

    return (
      <section className="pb-10" ref={refElement}>
        <h3 className="text text_type_main-medium mb-6">{title}</h3>
        <ul className={styles.set}>
          {ingredients
            .filter((ingredient) => ingredient.type === type)
            .map((ingredient) => (
              <IngredientCard key={ingredient._id} ingredient={ingredient} />
            ))}
        </ul>
      </section>
    );
  }
);
