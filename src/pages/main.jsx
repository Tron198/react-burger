import React, { useState, useCallback } from 'react';
import styles from './pages.module.css';
import {  useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderNumber } from '../services/actions/order-details';
import { BurgerIngredients } from '../components/burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../components/burger-constructor/burger-constructor';
import { PriceCount } from '../components/price-count/price-count';
import { Modal } from '../components/modal/modal';
import { IngredientDetails } from '../components/ingredient-details/ingredient-details';
import { OrderDetails } from '../components/order-details/order-details';
import { deleteIgredientDetails } from '../services/actions/ingredient-details';
import { clearConstructor } from '../services/actions/ingredients-constructor';

export function Main() {

  const dispatch = useDispatch();
  const history =  useHistory();
  const authorization = useSelector(state => state.getLogin.login);
  const [openOrderModal, setOrderOpenModal] = useState();
  const openIngredientsModal = useSelector(state => !!state.ingredientDetails.ingredientDetails);
  const ingredients = useSelector(state => state.ingredientsList.ingredientsList);
  const buns = useSelector(state => state.constructorList.buns);
  const idList = (ingredients.map(element => element._id));

  const handleOrderOpenModal = (() => {
    if (!authorization) {
      history.replace({ pathname: `/login` });
    } else {
      setOrderOpenModal(true)
      dispatch(getOrderNumber(idList))
    }
  })

  const closeIngredientsModal = useCallback(() => {
    dispatch(deleteIgredientDetails())
  }, [dispatch])

  const closeOrderModal = useCallback(() => {
    setOrderOpenModal(false)
    dispatch(clearConstructor())
  }, [])

  return (
    <>
      <main className={styles.main}>
        <BurgerIngredients />
        <div className={styles.twoBlocks}>
          <BurgerConstructor />
          {buns.length > 0 ?
            <PriceCount onClick={handleOrderOpenModal} />
            : null}
        </div>
      </main>

      {openIngredientsModal && (
        <Modal onClose={closeIngredientsModal} title='Детали ингредиента'>
          <IngredientDetails />
        </Modal>
      )}

      {!!openOrderModal && (
        <Modal onClose={closeOrderModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  )
}