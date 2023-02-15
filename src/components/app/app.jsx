import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppHeader } from '../app-header/app-header';
import { getIngredientsList } from '../../services/actions/ingredients-list';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from '../protected-route';
import {
  Main, Registration, LoginPage,
  ForgotPassword, ResetPassword, ProfilePage, PageNotFound
} from '../../pages/index';

export function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsList())
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
        <Route component={PageNotFound} />
      </Switch>
    </DndProvider>
  )
}