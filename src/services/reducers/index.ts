import { combineReducers } from "redux";
import { ingredientDetailsReducer } from "./ingredient-details";
import { constructorListReducer } from "./ingredients-constructor";
import { ingredientsListReducer } from "./ingredients-list";
import { orderDetailsReducer } from "./order-details";
import { passwordForgotReducer } from "./password-forgot";
import { passwordResetReducer } from "./password-reset";
import { registrationReducer } from "./register";
import { getLoginReducer } from "./login";
import { getUserInfoReducer } from "./user";

export const rootReducer = combineReducers({
  ingredientDetails: ingredientDetailsReducer,
  constructorList: constructorListReducer,
  ingredientsList: ingredientsListReducer,
  orderDetails: orderDetailsReducer,
  passwordForgot: passwordForgotReducer,
  passwordReset: passwordResetReducer,
  registration: registrationReducer,
  getLogin: getLoginReducer,
  userInfo: getUserInfoReducer,
});
