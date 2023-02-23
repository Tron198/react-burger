import React, { useCallback, useEffect } from "react";
import { useDispatch } from "../../services/hooks/hooks";
import { AppHeader } from "../app-header/app-header";
import { getIngredientsList } from "../../services/actions/ingredients-list";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { ProtectedRoute } from "../protected-route";
import {
  Main,
  Registration,
  LoginPage,
  ForgotPassword,
  ResetPassword,
  ProfilePage,
  FeedPage,
  IngredientPage,
  PageNotFound,
  FeedId,
  OrderId,
} from "../../pages/index";
import { TLocation } from "../../services/types/types";
import { Modal } from "../../components/modal/modal";
import { IngredientDetails } from "../../components/ingredient-details/ingredient-details";
import { OrderInfo } from "../order-info/order-info";
import { OrderInfoUser } from "../order-info-user/order-info-user";

export const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation<TLocation>();
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);

  const closeIngredientsModal = useCallback(() => {
    history.push("/");
  }, []);

  const closeModal = useCallback(() => {
    history.goBack();
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact={true} component={Main} />
        <Route path="/login" exact={true} component={LoginPage} />
        <Route path="/register" exact={true} component={Registration} />
        <Route
          path="/forgot-password"
          exact={true}
          component={ForgotPassword}
        />
        <Route path="/reset-password" exact={true} component={ResetPassword} />
        <ProtectedRoute path="/profile" exact={true} component={ProfilePage} />
        <ProtectedRoute
          path="/profile/orders"
          exact={true}
          component={ProfilePage}
        />
        <ProtectedRoute
          path="/profile/orders/:id"
          exact={true}
          component={OrderId}
        />
        <Route path="/feed" exact={true} component={FeedPage} />
        <Route path="/feed/:id" exact={true} component={FeedId} />
        <Route
          path="/ingredients/:id"
          exact={true}
          component={IngredientPage}
        />

        <Route component={PageNotFound} />
      </Switch>

      {background && (
        <>
          <Route path="/ingredients/:id">
            <Modal onClose={closeIngredientsModal} title="Детали ингредиента">
              <IngredientDetails />
            </Modal>
          </Route>

          <Route path="/feed/:id">
            <Modal onClose={closeModal}>
              <OrderInfo />
            </Modal>
          </Route>

          <Route path="/profile/orders/:id">
            <Modal onClose={closeModal}>
              <OrderInfoUser />
            </Modal>
          </Route>
        </>
      )}
    </DndProvider>
  );
};
