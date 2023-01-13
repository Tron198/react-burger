import { ingredientDetailsReducer } from "./ingredient-details";
import { constructorListReducer } from "./ingredients-constructor";
import { ingredientsListReducer } from "./ingredients-list";
import { orderDetailsReducer } from "./order-details";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  ingredientDetails: ingredientDetailsReducer,
  constructorList: constructorListReducer,
  ingredientsList: ingredientsListReducer,
  orderDetails: orderDetailsReducer
})