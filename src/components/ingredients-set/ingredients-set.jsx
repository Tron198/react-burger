import React from 'react';
import styles from './ingredients-set.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { IngredientCard } from '../ingredient-card/ingredient-card';

export const IngredientsSet = React.forwardRef(({ type, title }, ref) => {

  const ingredients = useSelector(state => state.ingredientsList.ingredientsList);

  return (
    <section className="pb-10" ref={ref}>
      <h3 className="text text_type_main-medium mb-6">{title}</h3>
      <ul className={styles.set}>
        {ingredients
          .filter((ingredient) => ingredient.type === type)
          .map((ingredient) => (
            <IngredientCard
              key={ingredient._id}
              ingredient={ingredient}
            />
          ))}
      </ul>
    </section>
  )
}
)

IngredientsSet.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}