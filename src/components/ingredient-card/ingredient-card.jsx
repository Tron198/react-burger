import styles from './ingredient-card.module.css';
import { useDrag } from 'react-dnd';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { setIgredientDetails } from '../../services/actions/ingredient-details';
import { ingredientType } from '../../utils/prop-types.js';
import { Link, useLocation  } from 'react-router-dom';

export  function IngredientCard({ ingredient }) {
  const location = useLocation();
  const elements = useSelector(state => state.constructorList.constructorList);
  const buns = useSelector(state => state.constructorList.buns);

  const count = useMemo(() => (
    elements.filter(element => element._id === ingredient._id).length || buns.filter(element => element._id === ingredient._id).length * 2
  ), [buns, elements, ingredient._id]);

  const dispatch = useDispatch();
  const handleIngredientClick = () => {
    dispatch(setIgredientDetails(ingredient))
  }

  const [, dragIngredient] = useDrag(() => ({
    type: 'card',
    item: {
      ingredient,
      id: ingredient._id,
      type: ingredient.type
    },
  }), [])

  return (
  
      <article className={styles.cardButton} onClick={handleIngredientClick} ref={dragIngredient}>
        
          <Link to={{
                pathname: `/ingredients/${ingredient._id}`,
                state: { background: location },
            }}
            className={`${styles.link} text text_type_main-default`}>
        {count > 0 ? <Counter count={count} size="small" /> : null}

        <img src={ingredient.image} alt={ingredient.name} />
        <div className={styles.priceBlock}>
          <p className="text text_type_digits-default pt-2 pr-2">{ingredient.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className="text text_type_main-default pt-2">{ingredient.name}</h3>
        </Link>
        </article>
  )
}
IngredientCard.propTypes = {
  ingredient: ingredientType.isRequired,
}