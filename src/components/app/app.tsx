import React, { useEffect } from "react";
import { AppHeader } from "../app-header/app-header";
import { getIngredientsList } from "../../services/actions/ingredients-list";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import {
  Switch,
  Route,
  useLocation,
  useHistory,
  useParams,
} from "react-router-dom";
import { ProtectedRoute } from "../protected-route";
import { deleteIgredientDetails } from "../../services/actions/ingredient-details";
import { Modal } from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import {
  Main,
  Registration,
  LoginPage,
  ForgotPassword,
  ResetPassword,
  ProfilePage,
  IngredientInfo,
  PageNotFound,
} from "../../pages/index";
import { TLocation } from "../../services/types/types";
import { useDispatch, useSelector } from "../../services/hooks/hooks";

export const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation<TLocation>();
  const background = location.state && location.state.background;
  type QuizParams = {
    id: string;
  };
  const { id } = useParams<QuizParams>();
  const { ingredientsList } = useSelector((state) => state.ingredientsList);
  const ingredient = ingredientsList.find((i: { _id: string }) => i._id === id);
  console.log(ingredient);

  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);

  //const openIngredientDetailsModal = useSelector(state => !!state.ingredientDetails.ingredientDetails);

  const closeIngredientsModal = () => {
    dispatch(deleteIgredientDetails());
    history.push({
      ...location.state.background,
      state: { background: null },
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact={true} component={Main} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={Registration} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password" component={ResetPassword} />
        <ProtectedRoute path="/profile" component={ProfilePage} />
        <ProtectedRoute path="/profile/orders" component={ProfilePage} />

        <Route path="/ingredients/:id">
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
  );
};
