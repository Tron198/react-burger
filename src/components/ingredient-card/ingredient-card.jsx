import styles from './ingredient-card.module.css';
import { useDrag } from 'react-dnd';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { setIgredientDetails } from '../../services/actions/ingredient-details';
import { ingredientType } from '../../utils/prop-types.js';
import { Link, useLocation, useHistory } from 'react-router-dom';

export function IngredientCard({ ingredient }) {
  const history = useHistory()
  const location = useLocation();
  const elements = useSelector(state => state.constructorList.constructorList);
  const buns = useSelector(state => state.constructorList.buns);

  const count = useMemo(() => (
    elements.filter(element => element._id === ingredient._id).length || buns.filter(element => element._id === ingredient._id).length * 2
  ), [buns, elements, ingredient._id]);

  const dispatch = useDispatch();
  const handleIngredientClick = () => {
    dispatch(setIgredientDetails(ingredient))
    history.push({
      pathname: `/ingredients/${ingredient._id}`,
      state: {
        background: location,
      }
    }, [])
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

    <article className={styles.item} onClick={handleIngredientClick} ref={dragIngredient}>

      <Link to={{
        pathname: `/ingredients/${ingredient._id}`,
        state: { background: location },
      }}
        className={`${styles.link} text text_type_main-default`}>
        {count > 0 ? <Counter count={count} size="small" /> : null}

        <img className="ml-4 mr-4" src={ingredient.image} alt={ingredient.name} />
        <div className={`${styles.price} mt-2 mb-2`}>
          <p className="text text_type_digits-default">{ingredient.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.subtitle} text text_type_main-default`}>{ingredient.name}</p>
      </Link>
    </article>
  )
}
IngredientCard.propTypes = {
  ingredient: ingredientType.isRequired,
}