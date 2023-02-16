import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeader } from '../app-header/app-header';
import { getIngredientsList } from '../../services/actions/ingredients-list';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Switch, Route, useLocation, useHistory, useParams } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route';
import { deleteIgredientDetails } from '../../services/actions/ingredient-details';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import {
  Main, Registration, LoginPage,
  ForgotPassword, ResetPassword, ProfilePage,
  IngredientInfo, PageNotFound
} from '../../pages/index';

export function App() {

  const history = useHistory()
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;
  const { id } = useParams()
  const { ingredientsList } = useSelector(state => state.ingredientsList)
  const ingredient = ingredientsList.find(i => i._id === id)
  console.log(ingredient)

  useEffect(() => {
    dispatch(getIngredientsList())
  }, [dispatch])

  const openIngredientDetailsModal = useSelector(state => !!state.ingredientDetails.ingredientDetails);

  const closeIngredientsModal = () => {
    dispatch(deleteIgredientDetails())
    history.push({
      ...location.state.background,
      state: { background: null },
    });
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact={true} component={Main} />
        <Route path="/login" exact={true} component={LoginPage} />
        <Route path="/register" exact={true} component={Registration} />
        <Route path="/forgot-password" exact={true} component={ForgotPassword} />
        <Route path="/reset-password" exact={true} component={ResetPassword} />
        <ProtectedRoute path="/profile" exact={true} component={ProfilePage} />
        <ProtectedRoute path="/profile/orders" exact={true} component={ProfilePage} />

        <Route path="/ingredients/:id" >
          <IngredientInfo />
        </Route>

        <Route component={PageNotFound} />
      </Switch>
      {background && (
        <Route path="/ingredients/:id">
          <Modal onClose={closeIngredientsModal}>
            <IngredientDetails />
          </Modal>
        </Route>
      )}
    </DndProvider>
  )
}
