import React, { useEffect, useCallback  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeader } from '../app-header/app-header';
import { getIngredientsList } from '../../services/actions/ingredients-list';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Switch, Route, useLocation } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route';
import { deleteIgredientDetails } from '../../services/actions/ingredient-details';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import {
  Main, Registration, LoginPage,
  ForgotPassword, ResetPassword, ProfilePage,
  IngredientPage, PageNotFound
} from '../../pages/index';

export function App() {

  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getIngredientsList())
  }, [dispatch])
  
  const openIngredientsModal = useSelector(state => !!state.ingredientDetails.ingredientDetails);
  
  const closeIngredientsModal = useCallback(() => {
    dispatch(deleteIgredientDetails())
    window.history.pushState(null, '', '/')
  }, [dispatch])


  return (
    <DndProvider backend={HTML5Backend}>
      <AppHeader />
      <Switch>
        <Route path="/" exact={true} component={Main} />
        <Route path="/login" exact={true} component={LoginPage} />
        <Route path="/register" exact={true} component={Registration} />
        <Route path="/forgot-password" exact={true} component={ForgotPassword} />
        <Route path="/reset-password" exact={true} component={ResetPassword} />
        <ProtectedRoute path="/profile" exact={true} component={ProfilePage} />
        <ProtectedRoute path="/profile/orders" exact={true} component={ProfilePage} />
        <Route path="/ingredients/:id" exact={true} component={IngredientPage} /> 
        <Route component={PageNotFound} />
      </Switch>
      {background && (
        <>
          <Route path="/ingredients/:id" >
            {openIngredientsModal && (
              <Modal onClose={closeIngredientsModal}>
                <IngredientDetails />
              </Modal>
            )}
          </Route>
        </>
      )}
    </DndProvider>
  )
}